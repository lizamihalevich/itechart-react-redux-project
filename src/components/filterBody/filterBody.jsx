import React from 'react';
import FilterBodyComponent from '../filterBodyComponent';
import Search from '../search';
import './filterBody.scss';

export default class FilterBody extends React.Component {
  render() {
    const filterInfo = 'FilterInfo random text random text random text';
    return (
      <div className="filterBody">
        <FilterBodyComponent filterName="Contexts" filterInfo={filterInfo} />
        <FilterBodyComponent filterName="Dimensions" filterInfo={filterInfo} />
        <Search />
      </div>
    );
  }
}
