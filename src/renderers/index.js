import renderPlain from './renderPlain';
import renderTree from './renderTree';

const renders = {
  tree: renderTree,
  plain: renderPlain,
  json: diff => JSON.stringify(diff, null, 2),
};

export default (diff, format = 'tree') => renders[format](diff);
