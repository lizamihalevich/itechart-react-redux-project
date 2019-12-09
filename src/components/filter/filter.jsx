import React from 'react';
import FilterHeader from '../filterHeader';

import './filter.scss';
import FilterBody from '../filterBody';

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
