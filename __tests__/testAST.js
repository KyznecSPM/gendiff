import fs from 'fs';
import gendiff from '../src';

test('gendiff AST JSON', () => {
  const astJSONBefore = './__tests__/__fixtures__/beforeAST.json';
  const astJSONAfter = './__tests__/__fixtures__/afterAST.json';
  const astExpected = fs.readFileSync('./__tests__/__fixtures__/expectedAST.txt', 'utf-8');
  expect(gendiff(astJSONBefore, astJSONAfter)).toEqual(astExpected);
});

test('gendiff AST YAML', () => {
  const astYAMLBefore = './__tests__/__fixtures__/beforeAST.yaml';
  const astYAMLAfter = './__tests__/__fixtures__/afterAST.yaml';
  const astExpected = fs.readFileSync('./__tests__/__fixtures__/expectedAST.txt', 'utf-8');
  expect(gendiff(astYAMLBefore, astYAMLAfter)).toEqual(astExpected);
});

test('gendiff AST INI', () => {
  const astINIBefore = './__tests__/__fixtures__/beforeAST.ini';
  const astINIAfter = './__tests__/__fixtures__/afterAST.ini';
  const astExpected = fs.readFileSync('./__tests__/__fixtures__/expectedAST.txt', 'utf-8');
  expect(gendiff(astINIBefore, astINIAfter)).toEqual(astExpected);
});
