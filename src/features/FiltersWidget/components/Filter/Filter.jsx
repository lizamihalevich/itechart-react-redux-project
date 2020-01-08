import React from 'react';
import PropTypes from 'prop-types';

import './Filter.scss';

import { getContexts, getDimensions, getFilters } from '../../../../app/data';

import FilterHeader from '../FilterHeader';
import FilterBody from '../FilterBody';

export default class Filter extends React.PureComponent {
  componentDidMount() {
    const { getData } = this.props;
    getData(getContexts(), getDimensions(), getFilters());
  }

  render() {
    return (
      <div className="filter">
        <FilterHeader header="Filters" />
        <FilterBody />
      </div>
    );
  }
}

Filter.propTypes = {
  getData: PropTypes.func
};
