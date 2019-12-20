import React from 'react';

import FilterBodyElement from '../FilterBodyElement';
import Footer from '../Footer/Footer';
import PanelOffset from '../Offset';

import './FilterBody.scss';

export default class FilterBody extends React.PureComponent {
  render() {
    const filterInfo = 'FilterInfo random text random text random text';
    return (
      <div className="filter-body">
        <FilterBodyElement filterName="Contexts" filterInfo={filterInfo} />
        <FilterBodyElement filterName="Dimensions" filterInfo={filterInfo} />
        <FilterBodyElement></FilterBodyElement>
        <PanelOffset>
          <Footer />
        </PanelOffset>
      </div>
    );
  }
}
