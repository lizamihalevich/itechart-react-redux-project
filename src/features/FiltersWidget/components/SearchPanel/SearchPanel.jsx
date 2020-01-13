import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import SearchInput from '../SearchInput';

import './SearchPanel.scss';

export default class SearchPanel extends React.PureComponent {
  render() {
    const { className, setSearchString } = this.props;

    const searchPanelClassName = classNames(className, {
      'search-panel': true
    });
    return (
      <div className={searchPanelClassName}>
        <FontAwesomeIcon className="search-panel__icon" icon={faSearch} />
        <SearchInput
          className="search-panel__input"
          setSearchString={setSearchString}
        />
      </div>
    );
  }
}

SearchPanel.defaultProps = {
  className: ''
};

SearchPanel.propTypes = {
  className: PropTypes.string,
  setSearchString: PropTypes.func
};
