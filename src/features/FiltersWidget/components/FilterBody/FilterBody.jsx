import React from 'react';

import Footer from '../Footer/Footer';
import PanelOffset from '../Offset';
import FilterBodyDropdown from '../FilterBodyDropdown';

import './FilterBody.scss';
import FilterBodySearchList from '../FilterBodySearchList';

export default class FilterBody extends React.PureComponent {
  render() {
    const filterInfo = 'FilterInfo random text random text random text';
    return (
      <div className="filter-body">
        <FilterBodyDropdown filterName="Contexts" filterInfo={filterInfo} />
        <FilterBodyDropdown filterName="Dimensions" filterInfo={filterInfo} />
        <FilterBodySearchList />
        <PanelOffset className="filter-body__footer"></PanelOffset>
      </div>
    );
  }
}
