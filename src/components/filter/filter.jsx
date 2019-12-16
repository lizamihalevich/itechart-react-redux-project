import React from 'react';

import FilterHeader from '../filterHeader';
import FilterBody from '../filterBody';

import './filter.scss';

export default class Filter extends React.Component {
  render() {
    return (
      <div className="filter">
        <FilterHeader text="Filters" />
        <FilterBody />
      </div>
    );
  }
}
