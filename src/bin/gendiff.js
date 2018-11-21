#!/usr/bin/env node

import commander from 'commander';
import { version, description } from '../../package.json';
import genDiff from '..';

commander
  .version(version)
  .description(description)
  .option('-f, --format [type]', 'output format')
  .arguments('<firstConfig> <secondConfig>')
  .action((filePath1, filePath2) => console.log(genDiff(filePath1, filePath2)))
  .parse(process.argv);
