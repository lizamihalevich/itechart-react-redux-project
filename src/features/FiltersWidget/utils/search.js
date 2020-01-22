import { EXACT_MATCH, PARTIAL_MATCH, STARTS_WITH } from '../constants';

const search = {
  [EXACT_MATCH]: (filter, searchString) => filter === searchString,
  [PARTIAL_MATCH]: (filter, searchString) => filter.includes(searchString),
  [STARTS_WITH]: (filter, searchString) => filter.startsWith(searchString)
};

export default search;
