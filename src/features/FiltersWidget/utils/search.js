import { EXACT_MATCH, PARTIAL_MATCH, STARTS_WITH } from '../constants';

const search = {
  [EXACT_MATCH]: (filter, searchString) => filter.title === searchString,
  [PARTIAL_MATCH]: (filter, searchString) =>
    filter.title.includes(searchString),
  [STARTS_WITH]: (filter, searchString) => filter.title.startsWith(searchString)
};

export default search;
