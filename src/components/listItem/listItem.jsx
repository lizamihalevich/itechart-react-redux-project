import React from 'react';

import ListItemCheckbox from '../listItemCheckbox';

import './listItem.scss';

export default class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name } = this.props;

    return (
      <div className="list-item">
        <ListItemCheckbox />
        <span className="list-item__name">{name}</span>
      </div>
    );
  }
}
