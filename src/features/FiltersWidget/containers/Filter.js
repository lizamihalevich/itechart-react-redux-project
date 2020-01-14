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
  contextsSelector,
  chosenDimensionsSelector,
  sortedFiltersSelector,
  selectedContextIdsSelector,
  selectedDimensionIdsSelector,
  selectedFilterIdsSelector,
  searchStringSelector,
  sortTypeSelector
} from '../selectors';

const mapStateToProps = state => {
  return {
    contexts: contextsSelector(state),
    dimensions: chosenDimensionsSelector(state),
    filters: sortedFiltersSelector(state),
    selectedContextIds: selectedContextIdsSelector(state),
    selectedDimensionIds: selectedDimensionIdsSelector(state),
    selectedFilterIds: selectedFilterIdsSelector(state),
    searchString: searchStringSelector(state),
    sortType: sortTypeSelector(state)
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
