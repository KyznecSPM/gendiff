import renderPlain from './renderPlain';
import renderTree from './renderTree';

const renders = {
  tree: renderTree,
  plain: renderPlain,
};

export default (diff, format = 'tree') => renders[format](diff);
