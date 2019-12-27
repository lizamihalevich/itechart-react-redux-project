import React from 'react';

import classNames from 'classnames';
import './SearchSort.scss';

export default class SearchSort extends React.PureComponent {
  render() {
    const { range, className } = this.props;

    const searchSortClassName = classNames(className, {
      'search-sort': true
    });
    return <button className={searchSortClassName}>{range}</button>;
  }
}

SearchSort.defaultProps = {
  range: 'A-Z',
  className: ''
};
