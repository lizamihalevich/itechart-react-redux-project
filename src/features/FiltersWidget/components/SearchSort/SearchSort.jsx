import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import './SearchSort.scss';

export default class SearchSort extends React.PureComponent {
  render() {
    const { range, className } = this.props;

    const searchSortClassName = classNames(className, {
      'search-sort': true
    });
    return (
      <button type="button" className={searchSortClassName}>
        {range}
      </button>
    );
  }
}

SearchSort.defaultProps = {
  range: 'A-Z',
  className: ''
};

SearchSort.propTypes = {
  className: PropTypes.string,
  range: PropTypes.string
};
