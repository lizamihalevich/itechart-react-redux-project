import React from 'react';
import SearchPanel from '../searchPanel';
import SearchMatch from '../searchMatch';
import SearchSort from '../searchSort';

export default class Search extends React.Component {
  render() {
    return (
      <div>
        <SearchPanel />
        <SearchMatch />
        <SearchSort range="A-Z" />
      </div>
    );
  }
}
