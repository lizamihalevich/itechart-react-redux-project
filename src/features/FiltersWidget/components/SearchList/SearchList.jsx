import React from 'react';

import classNames from 'classnames';
import ListItem from '../ListItem';

import './SearchList.scss';

export default class SearchList extends React.PureComponent {
  render() {
    const { className } = this.props;

    const searchListClassName = classNames(className, {
      'search-list': true
    });
    return (
      <ul className={searchListClassName}>
        <ListItem className="search-list__item" name="test1" />
        <ListItem className="search-list__item" name="test2" />
        <ListItem className="search-list__item" name="test3" />
      </ul>
    );
  }
}
