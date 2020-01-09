import React from 'react';
import PropTypes from 'prop-types';

import PanelOffset from '../Offset';
import FilterBodyDropdown from '../FilterBodyDropdown';
import FilterBodySearchList from '../FilterBodySearchList';

import './FilterBody.scss';

export default class FilterBody extends React.PureComponent {
  render() {
    const {
      contexts,
      dimensions,
      filters,
      selectedContextIds,
      selectedDimensionIds,
      selectedFilterIds,
      checkContext,
      checkDimension,
      checkFilter
    } = this.props;
    const filterInfo = 'FilterInfo random text random text random text';
    return (
      <div className="filter-body">
        <FilterBodyDropdown
          filterName="Contexts"
          filterInfo={filterInfo}
          items={contexts}
          selectedItemIds={selectedContextIds}
          checkItem={checkContext}
        />
        <FilterBodyDropdown
          filterName="Dimensions"
          filterInfo={filterInfo}
          items={dimensions}
          selectedItemIds={selectedDimensionIds}
          checkItem={checkDimension}
        />
        <FilterBodySearchList
          items={filters}
          selectedItemIds={selectedFilterIds}
          checkItem={checkFilter}
        />
        <PanelOffset className="filter-body__footer" />
      </div>
    );
  }
}

FilterBody.propTypes = {
  contexts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string
    })
  ),
  dimensions: PropTypes.arrayOf(
    PropTypes.shape({
      contextId: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      title: PropTypes.string
    })
  ),
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      dimensionID: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      title: PropTypes.string
    })
  ),
  selectedContextIds: PropTypes.arrayOf(PropTypes.number),
  selectedDimensionIds: PropTypes.arrayOf(PropTypes.number),
  selectedFilterIds: PropTypes.arrayOf(PropTypes.number),
  checkContext: PropTypes.func,
  checkDimension: PropTypes.func,
  checkFilter: PropTypes.func
};
