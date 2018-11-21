import { has, union } from 'lodash';
import path from 'path';
import fs from 'fs';
import parsers from './parsers';

const fileParse = (pathFile) => {
  const type = path.extname(pathFile);
  const parse = parsers(type);
  return parse(fs.readFileSync(pathFile, 'utf-8'));
};

const compare = (pathFile1, pathFile2) => {
  const parsedFile1 = fileParse(pathFile1);
  const parsedFile2 = fileParse(pathFile2);
  const filesKeys = union(Object.keys(parsedFile1), Object.keys(parsedFile2));

  const result = filesKeys.reduce((acc, key) => {
    if (has(parsedFile1, key) && has(parsedFile2, key)) {
      return parsedFile1[key] === parsedFile2[key] ? [...acc, `    ${key}: ${parsedFile1[key]}`] : [...acc, `  - ${key}: ${parsedFile1[key]}`, `  + ${key}: ${parsedFile2[key]}`];
    }
    if (has(parsedFile1, key) && !has(parsedFile2, key)) {
      return [...acc, `  - ${key}: ${parsedFile1[key]}`];
    }
    return [...acc, `  + ${key}: ${parsedFile2[key]}`];
  }, []);
  return result;
};

const dataToCLI = items => `{\n${items.map(el => `${el}\n`).join('')}}\n`;

export default (pathFile1, pathFile2) => dataToCLI(compare(pathFile1, pathFile2));
