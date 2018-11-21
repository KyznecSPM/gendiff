import fs from 'fs';
import gendiff from '../src';

const fileBefore = './__tests__/__fixtures__/before.json';
const fileAfter = './__tests__/__fixtures__/after.json';
const expected = fs.readFileSync('./__tests__/__fixtures__/expected.txt', 'utf-8');

test('gendiff JSON', () => {
  expect(gendiff(fileBefore, fileAfter)).toEqual(expected);
});
