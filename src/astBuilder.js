import _ from 'lodash';

const nodeManager = [
  {
    check: (obj1, obj2, key) => !_.has(obj1, key),
    makeNode: (obj1, obj2, key) => ({ name: key, type: 'added', newValue: obj2[key] }),
  },
  {
    check: (obj1, obj2, key) => !_.has(obj2, key),
    makeNode: (obj1, obj2, key) => ({ name: key, type: 'removed', oldValue: obj1[key] }),
  },
  {
    check: (obj1, obj2, key) => obj1[key] === obj2[key],
    makeNode: (obj1, obj2, key) => ({ name: key, type: 'unchanged', oldValue: obj1[key] }),
  },
  {
    check: (obj1, obj2, key) => _.isObject(obj1[key]) && _.isObject(obj2[key]),
    makeNode: (obj1, obj2, key, fn) => ({ name: key, type: 'nested', children: fn(obj1[key], obj2[key]) }),
  },
  {
    check: (obj1, obj2, key) => obj1[key] !== obj2[key],
    makeNode: (obj1, obj2, key) => ({
      name: key, type: 'changed', oldValue: obj1[key], newValue: obj2[key],
    }),
  },
];

const buildAST = (parsedFile1, parsedFile2) => {
  const filesKeys = _.union(Object.keys(parsedFile1), Object.keys(parsedFile2));

  const result = filesKeys.map((key) => {
    const { makeNode } = _.find(nodeManager, ({ check }) => check(parsedFile1, parsedFile2, key));
    return makeNode(parsedFile1, parsedFile2, key, buildAST);
  });
  // console.log(result);
  return result;
};
export default buildAST;
