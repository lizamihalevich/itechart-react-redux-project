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
      checkFilter,
      uncheckFilter,
      deleteSelectedContext,
      deleteSelectedDimension,
      setSearchString,
      setSortType,
      setSearchType,
      sortType
    } = this.props;

    return (
      <div className="filter-body">
        <FilterBodyDropdown
          filterName="Contexts"
          items={contexts}
          selectedItemIds={selectedContextIds}
          checkItem={checkContext}
          uncheckItem={deleteSelectedContext}
        />
        <FilterBodyDropdown
          filterName="Dimensions"
          items={dimensions}
          selectedItemIds={selectedDimensionIds}
          checkItem={checkDimension}
          uncheckItem={deleteSelectedDimension}
        />
        <FilterBodySearchList
          items={filters}
          selectedItemIds={selectedFilterIds}
          checkItem={checkFilter}
          uncheckItem={uncheckFilter}
          setSearchType={setSearchType}
          setSearchString={setSearchString}
          setSortType={setSortType}
          sortType={sortType}
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
      dimensionId: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      title: PropTypes.string
    })
  ),
  selectedContextIds: PropTypes.arrayOf(PropTypes.number),
  selectedDimensionIds: PropTypes.arrayOf(PropTypes.number),
  selectedFilterIds: PropTypes.arrayOf(PropTypes.number),
  checkContext: PropTypes.func,
  checkDimension: PropTypes.func,
  checkFilter: PropTypes.func,
  deleteSelectedContext: PropTypes.func,
  deleteSelectedDimension: PropTypes.func,
  uncheckFilter: PropTypes.func,
  setSearchString: PropTypes.func,
  setSortType: PropTypes.func,
  setSearchType: PropTypes.func,
  sortType: PropTypes.string
};
