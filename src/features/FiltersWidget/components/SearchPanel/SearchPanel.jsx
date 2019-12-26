import React from 'react';

import classNames from 'classnames';
import SearchInput from '../SearchInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './SearchPanel.scss';

export default class SearchPanel extends React.PureComponent {
  render() {
    const { className } = this.props;

    const searchPanelClassName = classNames(className, {
      'search-panel': true
    });
    return (
      <div className={searchPanelClassName}>
        <FontAwesomeIcon className="search-panel__icon" icon={faSearch} />
        <SearchInput className="search-panel__input" />
      </div>
    );
  }
}
