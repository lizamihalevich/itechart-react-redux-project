import React from 'react';

import PropTypes from 'prop-types';
import Dropdown from '../Dropdown';

import './FilterBodyElementDropdown.scss';

export default class FilterBodyElementDropdown extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { filterName, filterInfo } = this.props;
    return (
      <div className="filter-body-element-dropdown">
        <Dropdown header={filterName} />
        <p className="filter-body-element-dropdown__info">{filterInfo}</p>
      </div>
    );
  }
}

FilterBodyElementDropdown.propTypes = {
  filterName: PropTypes.string,
  filterInfo: PropTypes.string
};
