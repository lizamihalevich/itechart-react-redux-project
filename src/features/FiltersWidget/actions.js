import { createAction } from '@reduxjs/toolkit';
import { getContexts, getDimensions, getFilters } from '../../app/data';

const setData = createAction('GET_DATA', (contexts, dimensions, filters) => {
  return {
    payload: {
      contexts,
      dimensions,
      filters
    }
  };
});

const getData = () => dispatch => {
  const contexts = getContexts();
  const dimensions = getDimensions();
  const filters = getFilters();

  dispatch(setData(contexts, dimensions, filters));
};

const checkItem = createAction('CHECK_ITEM');
const selectDimensions = createAction('SELECT_DIMENSIONS');
const selectFilters = createAction('SELECT_FILTERS');
const setDimensions = createAction('SET_DIMENSIONS', (dims, contextId) => {
  return {
    payload: {
      dims,
      contextId
    }
  };
});

const checkContext = createAction('CHECK_CONTEXT');
const checkDimension = createAction('CHECK_DIMENSION');
const checkFilter = createAction('CHECK_FILTER');

export {
  getData,
  setDimensions,
  selectDimensions,
  selectFilters,
  setData,
  checkItem,
  checkContext,
  checkDimension,
  checkFilter
};
