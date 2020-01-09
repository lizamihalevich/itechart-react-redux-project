import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from '../Dropdown';

import './FilterBodyDropdown.scss';
import PanelOffset from '../Offset';

export default class FilterBodyDropdown extends React.PureComponent {
  render() {
    const {
      filterName,
      filterInfo,
      items,
      selectedItemIds,
      checkItem
    } = this.props;
    return (
      <PanelOffset>
        <div className="filter-body-element-dropdown">
          <Dropdown
            header={filterName}
            items={items}
            selectedItemIds={selectedItemIds}
            checkItem={checkItem}
          />
          <p className="filter-body-element-dropdown__info">{filterInfo}</p>
        </div>
      </PanelOffset>
    );
  }
}

FilterBodyDropdown.propTypes = {
  filterName: PropTypes.string,
  filterInfo: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
  selectedItemIds: PropTypes.arrayOf(PropTypes.number),
  checkItem: PropTypes.func
};

FilterBodyDropdown.defaultProps = {
  filterName: 'filter',
  filterInfo: ''
};
