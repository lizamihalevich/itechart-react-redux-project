import React from 'react';

import PropTypes from 'prop-types';
import Dropdown from '../Dropdown';

import './FilterBodyDropdown.scss';
import PanelOffset from '../Offset';

export default class FilterBodyDropdown extends React.PureComponent {
  render() {
    const { filterName, filterInfo, items } = this.props;
    return (
      <PanelOffset>
        <div className="filter-body-element-dropdown">
          <Dropdown header={filterName} items={items}/>
          <p className="filter-body-element-dropdown__info">{filterInfo}</p>
        </div>
      </PanelOffset>
    );
  }
}

FilterBodyDropdown.propTypes = {
  filterName: PropTypes.string,
  filterInfo: PropTypes.string
};

FilterBodyDropdown.defaultProps = {
  filterName: 'filter',
  filterInfo: ''
};
