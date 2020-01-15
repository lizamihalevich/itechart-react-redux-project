import { ASCENDING, DESCENDING } from '../constants';

const sort = {
  [ASCENDING]: (a, b) =>
    a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1,
  [DESCENDING]: (a, b) =>
    a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1
};

export default sort;
