#!/usr/bin/env node

import commander from 'commander';
import { version, description } from '../../package.json';
import genDiff from '../genDiff';

commander
  .version(version)
  .description(description)
  .option('-f, --format [type]', 'output format')
  .arguments('<firstConfig> <secondConfig>')
  .action((filePath1, filePath2) => genDiff(filePath1, filePath2, commander.format))
  .parse(process.argv);
