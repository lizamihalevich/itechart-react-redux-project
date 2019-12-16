import React from 'react';

import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faSquare } from '@fortawesome/free-solid-svg-icons';

import './listItemCheckbox.scss';

export default class ListItemCheckbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCheckboxClicked: false
    };
  }

  handleCheckboxClick() {
    this.setState(state => ({
      isCheckboxClicked: !state.isCheckboxClicked
    }));
  }

  render() {
    const { isCheckboxClicked } = this.state;

    let squareClass = classNames({
      'list-item-checkbox__square': true,
      'list-item-checkbox__square_clicked': isCheckboxClicked
    });

    let checkClass = classNames({
      'list-item-checkbox__check': true,
      'list-item-checkbox__check_hidden': !isCheckboxClicked
    });

    return (
      <div
        className="list-item-checkbox"
        onClick={() => this.handleCheckboxClick()}
      >
        <FontAwesomeIcon className={squareClass} icon={faSquare} />
        <FontAwesomeIcon className={checkClass} icon={faCheck} />
      </div>
    );
  }
}
