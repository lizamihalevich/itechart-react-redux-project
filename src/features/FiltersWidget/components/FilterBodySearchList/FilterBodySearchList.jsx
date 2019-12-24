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
          <Search />
          <SearchList />
        </div>
      </PanelOffset>
    );
  }
}
