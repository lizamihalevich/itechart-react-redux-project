import React from 'react';

export default class ListItem extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div className="listItem">
        <input className="listItem__checkbox" type="checkbox" />
        <span className="listItem__name">{name}</span>
      </div>
    );
  }
}
