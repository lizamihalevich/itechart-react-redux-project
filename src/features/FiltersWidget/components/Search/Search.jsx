import React from 'react';

import SearchPanel from '../SearchPanel';
import SearchMatch from '../SearchMatch';
import SearchSort from '../SearchSort';

import './Search.scss';

export default class Search extends React.PureComponent {
  render() {
    return (
      <div className="search">
        <SearchPanel />
        <div className="search__buttons">
          <SearchMatch />
          <SearchSort range="A-Z" />
        </div>
      </div>
    );
  }
}
