import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import { ASCENDING, DESCENDING } from '../../constants';
import './SearchSort.scss';

export default class SearchSort extends React.PureComponent {
  handleClick = () => {
    const { setSortType, sortType } = this.props;
    const type = sortType === ASCENDING ? DESCENDING : ASCENDING;
    setSortType(type);
  };

  render() {
    const { sortType, className } = this.props;

    const searchSortClassName = classNames(className, {
      'search-sort': true
    });

    const range = sortType === ASCENDING ? 'A-Z' : 'Z-A';
    return (
      <button
        type="button"
        className={searchSortClassName}
        onClick={this.handleClick}
      >
        {range}
      </button>
    );
  }
}

SearchSort.defaultProps = {
  className: ''
};

SearchSort.propTypes = {
  className: PropTypes.string,
  sortType: PropTypes.string,
  setSortType: PropTypes.func
};
