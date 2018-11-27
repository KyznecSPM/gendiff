import fs from 'fs';
import gendiff from '../src';

const pathBefore = './__tests__/__fixtures__/beforeAST';
const pathAfter = './__tests__/__fixtures__/afterAST';
const expectedFlat = './__tests__/__fixtures__/expectedPLAIN.txt';

test('gendiff AST INI output format plane', () => {
  const astINIBefore = `${pathBefore}.ini`;
  const astINIAfter = `${pathAfter}.ini`;
  const expectedPLAIN = fs.readFileSync(expectedFlat, 'utf-8');
  expect(gendiff(astINIBefore, astINIAfter, 'plain')).toEqual(expectedPLAIN);
});

test('gendiff AST JSON output format plane', () => {
  const astINIBefore = `${pathBefore}.json`;
  const astINIAfter = `${pathAfter}.json`;
  const expectedPLAIN = fs.readFileSync(expectedFlat, 'utf-8');
  expect(gendiff(astINIBefore, astINIAfter, 'plain')).toEqual(expectedPLAIN);
});

test('gendiff AST YAML output format plane', () => {
  const astINIBefore = `${pathBefore}.yaml`;
  const astINIAfter = `${pathAfter}.yaml`;
  const expectedPLAIN = fs.readFileSync(expectedFlat, 'utf-8');
  expect(gendiff(astINIBefore, astINIAfter, 'plain')).toEqual(expectedPLAIN);
});
