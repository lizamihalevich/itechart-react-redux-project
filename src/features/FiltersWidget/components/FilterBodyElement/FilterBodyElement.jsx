import React from 'react';

import PropTypes from 'prop-types';
import PanelOffset from '../Offset';
import FilterBodyElementDropdown from '../FilterBodyElementDropdown';
import FilterBodyElementList from '../FilterBodyElementList';

import './FilterBodyElement.scss';

export default class FilterBodyElement extends React.PureComponent {
  render() {
    const { filterName, filterInfo } = this.props;

    return (
      <PanelOffset>
        {filterName ? (
          <FilterBodyElementDropdown
            filterName={filterName}
            filterInfo={filterInfo}
          />
        ) : (
          <FilterBodyElementList />
        )}
      </PanelOffset>
    );
  }
}

FilterBodyElement.propTypes = {
  filterInfo: PropTypes.string,
  filterName: PropTypes.string
};
