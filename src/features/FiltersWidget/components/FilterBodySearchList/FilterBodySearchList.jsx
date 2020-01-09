import React from 'react';
import PropTypes from 'prop-types';
import Search from '../Search';
import SearchList from '../SearchList';

import './FilterBodySearchList.scss';
import PanelOffset from '../Offset';

export default class FilterBodySearchList extends React.PureComponent {
  render() {
    const { items, selectedItemIds, checkItem } = this.props;
    return (
      <PanelOffset>
        <div className="filter-body-element-list">
          <Search className="filter-body-element-list__search" />
          <SearchList
            className="filter-body-element-list__search-list"
            items={items}
            selectedItemIds={selectedItemIds}
            checkItem={checkItem}
          />
        </div>
      </PanelOffset>
    );
  }
}

FilterBodySearchList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  selectedItemIds: PropTypes.arrayOf(PropTypes.number),
  checkItem: PropTypes.func
};
