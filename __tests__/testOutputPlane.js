import fs from 'fs';
import gendiff from '../src';

test('gendiff AST INI output format plane', () => {
  const astINIBefore = './__tests__/__fixtures__/beforeAST.ini';
  const astINIAfter = './__tests__/__fixtures__/afterAST.ini';
  const expectedPLAIN = fs.readFileSync('./__tests__/__fixtures__/expectedPLAIN.txt', 'utf-8');
  expect(gendiff(astINIBefore, astINIAfter, 'plain')).toEqual(expectedPLAIN);
});

test('gendiff AST JSON output format plane', () => {
  const astINIBefore = './__tests__/__fixtures__/beforeAST.json';
  const astINIAfter = './__tests__/__fixtures__/afterAST.json';
  const expectedPLAIN = fs.readFileSync('./__tests__/__fixtures__/expectedPLAIN.txt', 'utf-8');
  expect(gendiff(astINIBefore, astINIAfter, 'plain')).toEqual(expectedPLAIN);
});

test('gendiff AST YAML output format plane', () => {
  const astINIBefore = './__tests__/__fixtures__/beforeAST.ini';
  const astINIAfter = './__tests__/__fixtures__/afterAST.ini';
  const expectedPLAIN = fs.readFileSync('./__tests__/__fixtures__/expectedPLAIN.txt', 'utf-8');
  expect(gendiff(astINIBefore, astINIAfter, 'plain')).toEqual(expectedPLAIN);
});
