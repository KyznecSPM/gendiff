import fs from 'fs';
import gendiff from '../src';

const pathBefore = './__tests__/__fixtures__/before';
const pathAfter = './__tests__/__fixtures__/after';
const expectedFlat = './__tests__/__fixtures__/expected.txt';

test('gendiff JSON', () => {
  const JSONBefore = `${pathBefore}.json`;
  const JSONAfter = `${pathAfter}.json`;
  const expected = fs.readFileSync(expectedFlat, 'utf-8');
  expect(gendiff(JSONBefore, JSONAfter)).toEqual(expected);
});

test('gendiff YAML', () => {
  const YAMLBefore = `${pathBefore}.yaml`;
  const YAMLAfter = `${pathAfter}.yaml`;
  const expected = fs.readFileSync(expectedFlat, 'utf-8');
  expect(gendiff(YAMLBefore, YAMLAfter)).toEqual(expected);
});

test('gendiff INI', () => {
  const INIBefore = `${pathBefore}.ini`;
  const INIAfter = `${pathAfter}.ini`;
  const expected = fs.readFileSync(expectedFlat, 'utf-8');
  expect(gendiff(INIBefore, INIAfter)).toEqual(expected);
});
