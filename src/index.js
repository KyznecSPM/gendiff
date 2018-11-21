import fs from 'fs';
import { has } from 'lodash';
import yaml from 'js-yaml';
import path from 'path';

const parsers = {
  '.json': JSON.parse,
  '.yaml': yaml.safeLoad,
  '.yml': yaml.safeLoad,
};

const fileParser = (file) => {
  const type = path.extname(file);
  const parser = parsers[type];
  return parser(fs.readFileSync(file, 'utf-8'));
};

const compare = (file1, file2) => {
  const parseFile1 = fileParser(file1);
  const parseFile2 = fileParser(file2);

  const deletedItems = Object.keys(parseFile1).reduce((acc, key) => (!has(parseFile2, key) ? [...acc, `  - ${key}: ${parseFile1[key]}`] : [...acc]), []);

  const changedItems = Object.keys(parseFile2).reduce((acc, key) => {
    if (has(parseFile1, key)) {
      return parseFile1[key] === parseFile2[key] ? [...acc, `    ${key}: ${parseFile1[key]}`] : [...acc, `  - ${key}: ${parseFile1[key]}`, `  + ${key}: ${parseFile2[key]}`];
    }

    return [...acc, `  + ${key}: ${parseFile2[key]}`];
  }, []);

  const resultItems = changedItems.concat(deletedItems);

  return resultItems;
};

const dataToCLI = items => `{\n${items.map(el => `${el}\n`).join('')}}\n`;

export default (file1, file2) => dataToCLI(compare(file1, file2));
