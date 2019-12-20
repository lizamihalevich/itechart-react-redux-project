import React from 'react';

import PropTypes from 'prop-types';
import ListItemCheckbox from '../ListItemCheckbox';

import './ListItem.scss';

export default class ListItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    };
  }

  handleClick = () => {
    this.setState(state => ({
      isChecked: !state.isChecked
    }));
  };

  handleCheckboxCLick = () => {
    this.props.onClick({ checked: !this.props.checked });
  };

  render() {
    const { name } = this.props;
    const { isChecked } = this.state;

    return (
      <div className="list-item" onClick={this.handleClick}>
        <ListItemCheckbox
          checked={isChecked}
          onClick={this.handleCheckboxCLick}
        />
        <span className="list-item__name" onClick={this.handleCheckboxClick}>
          {name}
        </span>
      </div>
    );
  }
}

ListItem.propTypes = {
  name: PropTypes.string
};
