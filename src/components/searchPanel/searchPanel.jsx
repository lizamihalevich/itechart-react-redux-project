import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import SearchInput from '../searchInput';

export default class SearchPanel extends React.Component {
  render() {
    return (
      <div>
        <FontAwesomeIcon icon={faSearch} />
        <SearchInput />
      </div>
    );
  }
}
