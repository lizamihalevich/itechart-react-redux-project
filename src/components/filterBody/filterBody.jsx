import React from 'react';
import FilterBodyComponent from '../filterBodyComponent';
import Search from '../search';
import './filterBody.scss';
import SearchList from '../searchList/searchList';
import Footer from '../footer/footer';
import PanelOffset from '../offset';

export default class FilterBody extends React.Component {
  render() {
    const filterInfo = 'FilterInfo random text random text random text';
    return (
      <div className="filterBody">
        <FilterBodyComponent filterName="Contexts" filterInfo={filterInfo} />
        <FilterBodyComponent filterName="Dimensions" filterInfo={filterInfo} />
        <FilterBodyComponent className="filterBody__component_search">
          <Search />
          <SearchList />
        </FilterBodyComponent>
        <PanelOffset>
          <Footer />
        </PanelOffset>
      </div>
    );
  }
}
