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
