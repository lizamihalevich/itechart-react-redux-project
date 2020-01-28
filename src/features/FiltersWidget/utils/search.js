import { EXACT_MATCH, PARTIAL_MATCH, STARTS_WITH } from '../constants';

const search = {
  [EXACT_MATCH]: (item, searchString) => item === searchString,
  [PARTIAL_MATCH]: (item, searchString) => item.includes(searchString),
  [STARTS_WITH]: (item, searchString) => item.startsWith(searchString)
};

export default search;
