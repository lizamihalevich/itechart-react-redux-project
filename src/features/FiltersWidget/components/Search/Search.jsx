import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import SearchPanel from '../SearchPanel';
import SearchMatch from '../SearchMatch';
import SearchSort from '../SearchSort';

import './Search.scss';

export default class Search extends React.PureComponent {
  render() {
    const {
      className,
      setSearchType,
      setSearchString,
      setSortType,
      sortType
    } = this.props;

    const searchClassName = classNames('search', className);

    return (
      <div className={searchClassName}>
        <SearchPanel
          className="search__search-panel"
          setSearchString={setSearchString}
        />
        <div className="search__buttons">
          <SearchMatch
            className="search__match"
            setSearchType={setSearchType}
          />
          <SearchSort
            className="search__search-sort"
            sortType={sortType}
            setSortType={setSortType}
          />
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  className: PropTypes.string,
  setSearchString: PropTypes.func,
  setSortType: PropTypes.func,
  setSearchType: PropTypes.func,
  sortType: PropTypes.string
};

Search.defaultProps = {
  className: ''
};
