import _ from 'lodash';

const checkComplex = value => (_.isObject(value) ? '[complex value]' : value);

const nodeToString = (node, parent, fnRender) => {
  const {
    name, type, oldValue, newValue,
  } = node;
  const toStringManager = {
    added: () => `Property '${parent}${name}' was added with value: ${checkComplex(newValue)}`,
    removed: () => `Property '${parent}${name}' was removed`,
    changed: () => `Property '${parent}${name}' was updated from ${checkComplex(oldValue)} to ${checkComplex(newValue)}`,
    unchanged: () => `Property '${parent}${name}' was not changed`,
    nested: () => fnRender(node.children, `${parent}${name}.`),
  };
  return toStringManager[type]();
};

const renderPlain = (diff, parent = '') => {
  const stringifiedDiff = diff.map(node => nodeToString(node, parent, renderPlain)).join('\n');
  return stringifiedDiff;
};

export default renderPlain;
