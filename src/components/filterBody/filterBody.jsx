import React from 'react';

import FilterBodyElement from '../filterBodyElement';
import Search from '../search';
import SearchList from '../searchList/searchList';
import Footer from '../footer/footer';
import PanelOffset from '../offset';

import './filterBody.scss';

export default class FilterBody extends React.Component {
  render() {
    const filterInfo = 'FilterInfo random text random text random text';
    return (
      <div className="filter-body">
        <FilterBodyElement filterName="Contexts" filterInfo={filterInfo} />
        <FilterBodyElement filterName="Dimensions" filterInfo={filterInfo} />
        <FilterBodyElement>
          <Search />
          <SearchList />
        </FilterBodyElement>
        <PanelOffset>
          <Footer />
        </PanelOffset>
      </div>
    );
  }
}
