import fs from 'fs';
import gendiff from '../src';

test('gendiff JSON', () => {
  const JSONBefore = './__tests__/__fixtures__/before.json';
  const JSONAfter = './__tests__/__fixtures__/after.json';
  const expected = fs.readFileSync('./__tests__/__fixtures__/expected.txt', 'utf-8');
  expect(gendiff(JSONBefore, JSONAfter)).toEqual(expected);
});

test('gendiff YAML', () => {
  const YAMLBefore = './__tests__/__fixtures__/before.yaml';
  const YAMLAfter = './__tests__/__fixtures__/after.yaml';
  const expected = fs.readFileSync('./__tests__/__fixtures__/expected.txt', 'utf-8');
  expect(gendiff(YAMLBefore, YAMLAfter)).toEqual(expected);
});

test('gendiff INI', () => {
  const INIBefore = './__tests__/__fixtures__/before.ini';
  const INIAfter = './__tests__/__fixtures__/after.ini';
  const expected = fs.readFileSync('./__tests__/__fixtures__/expected.txt', 'utf-8');
  expect(gendiff(INIBefore, INIAfter)).toEqual(expected);
});

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
