import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from '../Dropdown';

import './FilterBodyDropdown.scss';
import PanelOffset from '../Offset';

export default class FilterBodyDropdown extends React.PureComponent {
  getFilterInfo() {
    const { items, selectedItemIds } = this.props;
    const selectedItems = items.map(item => {
      if (selectedItemIds.includes(item.id)) {
        return item.title;
      }
    });
    return selectedItems.join(' ');
  }

  render() {
    const {
      filterName,
      items,
      selectedItemIds,
      checkItem,
      uncheckItem
    } = this.props;

    return (
      <PanelOffset>
        <div className="filter-body-element-dropdown">
          <Dropdown
            header={filterName}
            items={items}
            selectedItemIds={selectedItemIds}
            checkItem={checkItem}
            uncheckItem={uncheckItem}
          />
          <p className="filter-body-element-dropdown__info">
            {this.getFilterInfo()}
          </p>
        </div>
      </PanelOffset>
    );
  }
}

FilterBodyDropdown.propTypes = {
  filterName: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
  selectedItemIds: PropTypes.arrayOf(PropTypes.number),
  checkItem: PropTypes.func,
  uncheckItem: PropTypes.func
};

FilterBodyDropdown.defaultProps = {
  filterName: 'filter'
};
