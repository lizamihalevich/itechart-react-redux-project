import React from 'react';
import PropTypes from 'prop-types';

import './Filter.scss';

import FilterHeader from '../FilterHeader';
import FilterBody from '../FilterBody';

export default class Filter extends React.PureComponent {
  componentDidMount() {
    const { getData } = this.props;
    getData();
  }

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
      addSelectedContext,
      uncheckContext,
      uncheckDimension,
      uncheckFilter,
      setSearchString,
      setSearchType,
      setSortType,
      sortType
    } = this.props;
    return (
      <div className="filter">
        <FilterHeader header="Filters" />
        <FilterBody
          contexts={contexts}
          dimensions={dimensions}
          filters={filters}
          selectedContextIds={selectedContextIds}
          selectedDimensionIds={selectedDimensionIds}
          selectedFilterIds={selectedFilterIds}
          checkContext={checkContext}
          uncheckContext={uncheckContext}
          checkDimension={checkDimension}
          uncheckDimension={uncheckDimension}
          checkFilter={checkFilter}
          uncheckFilter={uncheckFilter}
          addSelectedContext={addSelectedContext}
          setSearchString={setSearchString}
          setSearchType={setSearchType}
          setSortType={setSortType}
          sortType={sortType}
        />
      </div>
    );
  }
}

Filter.propTypes = {
  getData: PropTypes.func,
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
  uncheckContext: PropTypes.func,
  uncheckDimension: PropTypes.func,
  uncheckFilter: PropTypes.func,
  addSelectedContext: PropTypes.func,
  setSearchString: PropTypes.func,
  setSearchType: PropTypes.func,
  setSortType: PropTypes.func,
  sortType: PropTypes.string
};
