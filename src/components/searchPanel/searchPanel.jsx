import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import SearchInput from '../searchInput';
import './searchPanel.scss';

export default class SearchPanel extends React.Component {
  render() {
    return (
      <div className="searchPanel">
        <FontAwesomeIcon className="searchPanel__icon" icon={faSearch} />
        <SearchInput className="searchPanel__input" />
      </div>
    );
  }
}
