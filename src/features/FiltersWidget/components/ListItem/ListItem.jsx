import React from 'react';

import PropTypes from 'prop-types';
import ListItemCheckbox from '../ListItemCheckbox';

import './ListItem.scss';

export default class ListItem extends React.PureComponent {
  render() {
    const { name, onClick, isChecked } = this.props;

    return (
      <div className="list-item" onClick={onClick}>
        <ListItemCheckbox checked={isChecked} />
        <span className="list-item__name">{name}</span>
      </div>
    );
  }
}

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isChecked: PropTypes.bool
};
