import { createSelector } from '@reduxjs/toolkit';
import search from '../utils/search';
import sort from '../utils/sort';

const contextsSelector = state => state.filtersWidget.contexts;
const dimensionsSelector = state => state.filtersWidget.dimensions;
const filtersSelector = state => state.filtersWidget.filters;

const selectedContextIdsSelector = state =>
  state.filtersWidget.selectedContextIds;

const selectedDimensionIdsSelector = state =>
  state.filtersWidget.selectedDimensionIds;

const selectedFilterIdsSelector = state =>
  state.filtersWidget.selectedFilterIds;

const searchTypeSelector = state => state.filtersWidget.searchType;
const searchStringSelector = state => state.filtersWidget.searchString;

const sortTypeSelector = state => state.filtersWidget.sortType;

const chosenDimensionsSelector = createSelector(
  dimensionsSelector,
  selectedContextIdsSelector,
  (dimensions, selectedIds) =>
    dimensions.filter(dimension => selectedIds.includes(dimension.contextId))
);

const chosenFiltersSelector = createSelector(
  filtersSelector,
  selectedDimensionIdsSelector,
  (filters, selectedIds) =>
    filters.filter(filter => selectedIds.includes(filter.dimensionId))
);

const searchedFiltersSelector = createSelector(
  chosenFiltersSelector,
  searchTypeSelector,
  searchStringSelector,
  (filters, searchType, searchString) => {
    if (!searchString) {
      return filters;
    }
    return filters.filter(filter => search[searchType](filter, searchString));
  }
);

const sortedFiltersSelector = createSelector(
  searchedFiltersSelector,
  sortTypeSelector,
  (filters, sortType) => {
    return filters.sort(sort[sortType]).concat();
  }
);

export {
  contextsSelector,
  chosenDimensionsSelector,
  sortedFiltersSelector,
  selectedContextIdsSelector,
  selectedDimensionIdsSelector,
  selectedFilterIdsSelector,
  searchStringSelector,
  sortTypeSelector
};
