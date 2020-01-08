import { createAction } from '@reduxjs/toolkit';
// import { getContexts } from '../../app/data';

// const getData = () => ( (dispatch, getState) => {
//     const contexts = getContexts();

//     dispatch(setData(contexts))
// })
const getData = createAction('GET_DATA', (contexts, dimensions, filters) => {
  return {
    payload: {
      contexts,
      dimensions,
      filters
    }
  };
});

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

export { getData, setDimensions, selectDimensions, selectFilters };
