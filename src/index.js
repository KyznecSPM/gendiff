import fs from 'fs';
import { has } from 'lodash';

const compare = (file1, file2) => {
  const parseFile1 = JSON.parse(fs.readFileSync(file1, 'utf-8'));
  const parseFile2 = JSON.parse(fs.readFileSync(file2, 'utf-8'));

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

const dataToCLI = items => `{\n${items.map(el => `${el}\n`).join('')}}`;

export default (file1, file2) => dataToCLI(compare(file1, file2));
