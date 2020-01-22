import { ASCENDING, DESCENDING } from '../constants';

const sort = {
  [ASCENDING]: (a, b) => (a.toLowerCase() > b.toLowerCase() ? 1 : -1),
  [DESCENDING]: (a, b) => (a.toLowerCase() < b.toLowerCase() ? 1 : -1)
};

export default sort;
