import fs from 'fs';
import path from 'path';
import parsers from './parsers';
import buildAST from './astBuilder';
import render from './renderers';

const fileParse = (pathFile) => {
  const type = path.extname(pathFile);
  const parse = parsers(type);
  return parse(fs.readFileSync(pathFile, 'utf-8'));
};

export default (pathFile1, pathFile2, format) => {
  const parsedFile1 = fileParse(pathFile1);
  const parsedFile2 = fileParse(pathFile2);
  const diffAST = buildAST(parsedFile1, parsedFile2);
  return render(diffAST, format);
};
