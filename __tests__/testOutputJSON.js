import fs from 'fs';
import gendiff from '../src';

test('gendiff AST JSON output format plane', () => {
  const astINIBefore = './__tests__/__fixtures__/beforeAST.json';
  const astINIAfter = './__tests__/__fixtures__/afterAST.json';
  const expectedPLAIN = fs.readFileSync('./__tests__/__fixtures__/expectedFormatJson.txt', 'utf-8');
  expect(gendiff(astINIBefore, astINIAfter, 'json')).toEqual(expectedPLAIN);
});
