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

const checkContext = createAction('CHECK_CONTEXT');
const checkDimension = createAction('CHECK_DIMENSION');
const checkFilter = createAction('CHECK_FILTER');

const uncheckContext = createAction('UNCHECK_CONTEXT');
const uncheckDimension = createAction('UNCHECK_DIMENSION');
const uncheckFilter = createAction('UNCHECK_FILTER');

const deleteSelectedContext = id => (dispatch, getState) => {
  const deletedDimensionIds = getState()
    .filtersWidget.dimensions.filter(dimension => dimension.contextId === id)
    .map(dimension => dimension.id);
  const deletedFilterIds = getState().filtersWidget.filters.filter(filter =>
    deletedDimensionIds.includes(filter.dimensionId)
  );

  dispatch(uncheckContext(id));
  dispatch(uncheckDimension(deletedDimensionIds));
  dispatch(uncheckFilter(deletedFilterIds));
};

const deleteSelectedDimension = id => (dispatch, getState) => {
  const deletedFilters = getState().filtersWidget.filters.filter(
    filter => filter.dimensionId === id
  );

  dispatch(uncheckDimension(id));
  dispatch(uncheckFilter(deletedFilters));
};

const setSearchString = createAction('SET_SEARCH_STRING');

const setSortType = createAction('SET_SORT_TYPE');
const setSearchType = createAction('SET_SEARCH_TYPE');

export {
  getData,
  setData,
  checkContext,
  checkDimension,
  checkFilter,
  uncheckContext,
  uncheckDimension,
  uncheckFilter,
  deleteSelectedDimension,
  deleteSelectedContext,
  setSearchString,
  setSearchType,
  setSortType
};
