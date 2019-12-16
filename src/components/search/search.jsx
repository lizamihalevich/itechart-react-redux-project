import React from 'react';

import SearchPanel from '../searchPanel';
import SearchMatch from '../searchMatch';
import SearchSort from '../searchSort';

import './search.scss';

export default class Search extends React.Component {
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
