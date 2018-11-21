import fs from 'fs';
import gendiff from '../src';

const expected = fs.readFileSync('./__tests__/__fixtures__/expected.txt', 'utf-8');

const JSONBefore = './__tests__/__fixtures__/before.json';
const JSONAfter = './__tests__/__fixtures__/after.json';

const YAMLBefore = './__tests__/__fixtures__/before.yaml';
const YAMLAfter = './__tests__/__fixtures__/after.yaml';

test('gendiff JSON', () => {
  expect(gendiff(JSONBefore, JSONAfter)).toEqual(expected);
});

test('gendiff YAML', () => {
  expect(gendiff(YAMLBefore, YAMLAfter)).toEqual(expected);
});
