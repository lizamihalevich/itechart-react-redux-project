import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import ListItemCheckbox from '../ListItemCheckbox';

import './ListItem.scss';

export default class ListItem extends React.PureComponent {
  render() {
    const { name, onClick, isChecked, className } = this.props;

    const listItemClassName = classNames('list-item', className);
    return (
      <div className={listItemClassName} onClick={onClick}>
        <ListItemCheckbox checked={isChecked} />
        <span className="list-item__name">{name}</span>
      </div>
    );
  }
}

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  isChecked: PropTypes.bool
};

ListItem.defaultProps = {
  className: ''
};
