import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import SearchPanel from '../SearchPanel';
import SearchMatch from '../SearchMatch';
import SearchSort from '../SearchSort';

import './Search.scss';

export default class Search extends React.PureComponent {
  render() {
    const { className } = this.props;
    const searchClassName = classNames(className, {
      search: true
    });
    return (
      <div className={searchClassName}>
        <SearchPanel className="search__search-panel" />
        <div className="search__buttons">
          <SearchMatch className="search__match" />
          <SearchSort className="search__search-sort" range="A-Z" />
        </div>
      </div>
    );
  }
}

Search.defaultProps = {
  className: ''
};

Search.propTypes = {
  className: PropTypes.string
};
