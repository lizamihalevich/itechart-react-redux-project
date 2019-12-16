import React from 'react';

import SearchInput from '../searchInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './searchPanel.scss';

export default class SearchPanel extends React.Component {
  render() {
    return (
      <div className="search-panel">
        <FontAwesomeIcon className="search-panel__icon" icon={faSearch} />
        <SearchInput className="search-panel__input" />
      </div>
    );
  }
}
