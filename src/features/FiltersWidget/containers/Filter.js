import { connect } from 'react-redux';
import Filter from '../components/Filter';

import { getData, checkContext, checkDimension, checkFilter } from '../actions';

const chooseDimensions = (dimensions, selectedIds) => {
  return dimensions.filter(dimension =>
    selectedIds.includes(dimension.contextId)
  );
};

const chooseFilters = (filters, selectedIds) => {
  return filters.filter(filter => selectedIds.includes(filter.dimensionID));
};

const mapStateToProps = state => {
  return {
    contexts: state.filtersWidget.contexts,
    dimensions: chooseDimensions(
      state.filtersWidget.dimensions,
      state.filtersWidget.selectedContextIds
    ),
    filters: chooseFilters(
      state.filtersWidget.filters,
      state.filtersWidget.selectedDimensionIds
    ),
    selectedContextIds: state.filtersWidget.selectedContextIds,
    selectedDimensionIds: state.filtersWidget.selectedDimensionIds,
    selectedFilterIds: state.filtersWidget.selectedFilterIds
  };
};

const mapDispatchToProps = {
  checkContext,
  checkDimension,
  checkFilter,
  getData
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
