import fs from 'fs';
import gendiff from '../src';

const pathBefore = './__tests__/__fixtures__/beforeAST';
const pathAfter = './__tests__/__fixtures__/afterAST';
const expectedAST = './__tests__/__fixtures__/expectedAST.txt';

test('gendiff AST JSON', () => {
  const astJSONBefore = `${pathBefore}.json`;
  const astJSONAfter = `${pathAfter}.json`;
  const astExpected = fs.readFileSync(expectedAST, 'utf-8');
  expect(gendiff(astJSONBefore, astJSONAfter)).toEqual(astExpected);
});

test('gendiff AST YAML', () => {
  const astYAMLBefore = `${pathBefore}.yaml`;
  const astYAMLAfter = `${pathAfter}.yaml`;
  const astExpected = fs.readFileSync(expectedAST, 'utf-8');
  expect(gendiff(astYAMLBefore, astYAMLAfter)).toEqual(astExpected);
});

test('gendiff AST INI', () => {
  const astINIBefore = `${pathBefore}.ini`;
  const astINIAfter = `${pathAfter}.ini`;
  const astExpected = fs.readFileSync(expectedAST, 'utf-8');
  expect(gendiff(astINIBefore, astINIAfter)).toEqual(astExpected);
});
