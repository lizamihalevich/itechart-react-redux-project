import React from 'react';

import PropTypes from 'prop-types';
import Dropdown from '../Dropdown';

import './FilterBodyDropdown.scss';
import PanelOffset from '../Offset';

export default class FilterBodyDropdown extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { filterName, filterInfo } = this.props;
    return (
      <PanelOffset>
        <div className="filter-body-element-dropdown">
          <Dropdown header={filterName} />
          <p className="filter-body-element-dropdown__info">{filterInfo}</p>
        </div>
      </PanelOffset>
    );
  }
}

FilterBodyDropdown.defaultProps = {
  filterName: 'filter',
  filterInfo: ''
};

FilterBodyDropdown.propTypes = {
  filterName: PropTypes.string,
  filterInfo: PropTypes.string
};
