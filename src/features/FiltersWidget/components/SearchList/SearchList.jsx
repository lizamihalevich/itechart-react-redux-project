import React from 'react';

import ListItem from '../ListItem';

import './SearchList.scss';

export default class SearchList extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="search-list">
        <ListItem className="search-list__item" name="test1" />
        <ListItem className="search-list__item" name="test2" />
        <ListItem className="search-list__item" name="test3" />
      </ul>
    );
  }
}
