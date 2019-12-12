import React from 'react';
import ListItem from '../listItem';
import './searchList.scss';

export default class SearchList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="searchList">
        <ListItem className="searchList__item" name="test1" />
        <ListItem className="searchList__item" name="test2" />
        <ListItem className="searchList__item" name="test3" />
      </ul>
    );
  }
}
