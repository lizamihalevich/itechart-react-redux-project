import React from 'react';

import './SearchSort.scss';

export default class SearchSort extends React.PureComponent {
  render() {
    const { range } = this.props;
    return <button className="search-sort">{range}</button>;
  }
}
