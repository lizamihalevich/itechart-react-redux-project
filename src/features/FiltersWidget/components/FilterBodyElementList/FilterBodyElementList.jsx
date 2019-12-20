import React from 'react';
import Search from '../Search';
import SearchList from '../SearchList';

import './FilterBodyElementList.scss';

export default class FilterBodyElementList extends React.PureComponent {
  render() {
    return (
      <div className="filter-body-element-list">
        <Search />
        <SearchList />
      </div>
    );
  }
}
