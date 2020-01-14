import { connect } from 'react-redux';
import Filter from '../components/Filter';

import {
  getData,
  checkContext,
  checkDimension,
  checkFilter,
  setSearchString,
  setSearchType,
  setSortType
} from '../actions';

import {
  EXACT_MATCH,
  PARTIAL_MATCH,
  STARTS_WITH,
  ASCENDING
} from '../constants';

const chooseDimensions = (dimensions, selectedIds) => {
  return dimensions.filter(dimension =>
    selectedIds.includes(dimension.contextId)
  );
};

const chooseFilters = (filters, selectedIds) => {
  return filters.filter(filter => selectedIds.includes(filter.dimensionId));
};

const partialSearch = (filters, searchString) => {
  return filters.filter(filter => filter.title.includes(searchString));
};

const exactSearch = (filters, searchString) => {
  return filters.filter(filter => filter.title === searchString);
};

const startsWithSearch = (filters, searchString) => {
  return filters.filter(filter => filter.title.startsWith(searchString));
};

const chooseFiltersAfterSearch = (filters, searchType, searchString) => {
  let searchedFilters;
  if (!searchString) return filters;
  switch (searchType) {
    case EXACT_MATCH:
      searchedFilters = exactSearch(filters, searchString);
      break;
    case PARTIAL_MATCH:
      searchedFilters = partialSearch(filters, searchString);
      break;
    case STARTS_WITH:
      searchedFilters = startsWithSearch(filters, searchString);
      break;
    default:
      return filters;
  }
  return searchedFilters;
};

const chooseFiltersAfterSort = (filters, sortType) => {
  if (sortType === ASCENDING) {
    return filters.sort((a, b) =>
      a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
    );
  }
  return filters
    .sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1))
    .reverse();
};

const mapStateToProps = state => {
  return {
    contexts: state.filtersWidget.contexts,
    dimensions: chooseDimensions(
      state.filtersWidget.dimensions,
      state.filtersWidget.selectedContextIds
    ),
    filters: chooseFiltersAfterSort(
      chooseFiltersAfterSearch(
        chooseFilters(
          state.filtersWidget.filters,
          state.filtersWidget.selectedDimensionIds
        ),
        state.filtersWidget.searchType,
        state.filtersWidget.searchString
      ),
      state.filtersWidget.sortType
    ),
    selectedContextIds: state.filtersWidget.selectedContextIds,
    selectedDimensionIds: state.filtersWidget.selectedDimensionIds,
    selectedFilterIds: state.filtersWidget.selectedFilterIds,
    searchString: state.filtersWidget.searchString,
    sortType: state.filtersWidget.sortType
  };
};

const mapDispatchToProps = {
  setSortType,
  setSearchType,
  setSearchString,
  checkContext,
  checkDimension,
  checkFilter,
  getData
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
