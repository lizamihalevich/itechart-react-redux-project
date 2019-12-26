import React from 'react';
import Search from '../Search';
import SearchList from '../SearchList';

import './FilterBodySearchList.scss';
import PanelOffset from '../Offset';

export default class FilterBodySearchList extends React.PureComponent {
  render() {
    return (
      <PanelOffset>
        <div className="filter-body-element-list">
          <Search className="filter-body-element-list__search" />
          <SearchList className="filter-body-element-list__search-list" />
        </div>
      </PanelOffset>
    );
  }
}
