#!/usr/bin/env node

import commander from 'commander';
import { version, description } from '../../package.json';
import genDiff from '..';

commander
  .version(version)
  .description(description)
  .option('-f, --format [type]', 'output format')
  .arguments('<firstConfig> <secondConfig>')
  .action((pathFile1, pathFile2) => console.log(genDiff(pathFile1, pathFile2, commander.format)))
  .parse(process.argv);
