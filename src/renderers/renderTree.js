import _ from 'lodash';

const tab = numTab => '  '.repeat(numTab);
const curlyWrap = (str, numTab) => `{\n${str}\n${tab(numTab - 1)}}`;

const objectToString = (obj, numTab) => {
  const propertiesToString = _.keys(obj).map((key) => {
    const value = obj[key];
    if (_.isObject(value)) {
      return objectToString(value, numTab + 2);
    }
    return `${tab(numTab)}  ${key}: ${value}`;
  });
  const objectString = propertiesToString.join('\n');
  return curlyWrap(objectString, numTab);
};

const valueToString = (value, numTab) => (
  _.isObject(value) ? objectToString(value, numTab + 2) : value
);

const nodeToStringManager = {
  added: (node, numTab) => `${tab(numTab)}+ ${node.name}: ${valueToString(node.newValue, numTab)}`,
  removed: (node, numTab) => `${tab(numTab)}- ${node.name}: ${valueToString(node.oldValue, numTab)}`,
  unchanged: (node, numTab) => `${tab(numTab)}  ${node.name}: ${valueToString(node.oldValue, numTab)}`,
  nested: (node, numTab, fn) => `${tab(numTab)}  ${node.name}: ${fn(node.children, numTab + 2)}`,
  changed: (node, numTab) => (
    [
      `${tab(numTab)}- ${node.name}: ${valueToString(node.oldValue, numTab)}`,
      `${tab(numTab)}+ ${node.name}: ${valueToString(node.newValue, numTab)}`,
    ]
  ),
};

const render = (diff, numTab = 1) => {
  const stringifiedDiff = _.flatten(diff.map(
    node => nodeToStringManager[node.type](node, numTab, render),
  ));
  return curlyWrap(stringifiedDiff.join('\n'), numTab).concat('\n');
};
export default render;
