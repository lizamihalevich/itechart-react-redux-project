import React from 'react';
import SearchPanel from '../searchPanel';
import SearchMatch from '../searchMatch';

export default class Search extends React.Component {
  render() {
    return (
      <>
        <SearchPanel />
        <SearchMatch />
        <SearchSort range="A-Z" />
      </>
    );
  }
}
