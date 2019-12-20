import React from 'react';

import SearchInput from '../SearchInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './SearchPanel.scss';

export default class SearchPanel extends React.PureComponent {
  render() {
    return (
      <div className="search-panel">
        <FontAwesomeIcon className="search-panel__icon" icon={faSearch} />
        <SearchInput className="search-panel__input" />
      </div>
    );
  }
}
