import React from 'react';
import PropTypes from 'prop-types';
import Search from '../Search';
import SearchList from '../SearchList';

import './FilterBodySearchList.scss';
import PanelOffset from '../Offset';

export default class FilterBodySearchList extends React.PureComponent {
  render() {
    const {
      items,
      selectedItemIds,
      checkItem,
      setSearchString,
      setSearchType,
      setSortType,
      sortType
    } = this.props;
    return (
      <PanelOffset>
        <div className="filter-body-element-list">
          <Search
            className="filter-body-element-list__search"
            setSearchString={setSearchString}
            setSortType={setSortType}
            setSearchType={setSearchType}
            sortType={sortType}
          />
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
  checkItem: PropTypes.func,
  setSearchString: PropTypes.func,
  setSortType: PropTypes.func,
  setSearchType: PropTypes.func,
  sortType: PropTypes.string
};
