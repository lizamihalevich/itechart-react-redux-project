import React from 'react';

import FilterHeader from '../FilterHeader';
import FilterBody from '../FilterBody';

import './Filter.scss';

export default class Filter extends React.PureComponent {
  render() {
    return (
      <div className="filter">
        <FilterHeader header="Filters" />
        <FilterBody />
      </div>
    );
  }
}
