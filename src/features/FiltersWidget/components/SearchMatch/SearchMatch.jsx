import React from 'react';

import classNames from 'classnames';
import './SearchMatch.scss';

export default class searchMatch extends React.PureComponent {
  render() {
    const { className } = this.props;

    const searchMatchClassName = classNames(className, {
      'search-match': true
    });
    return (
      <select className={searchMatchClassName}>
        <option className="search-match__option">.</option>
        <option className="search-match__option">.</option>
        <option className="search-match__option">.</option>
      </select>
    );
  }
}

SearchMatch.defaultProps = {
  className: ''
};
