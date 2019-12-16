import React from 'react';

import Header from '../header';
import ListItem from '../listItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import './dropdown.scss';

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChevronClicked: false
    };
  }

  handleChevronClick() {
    this.setState(state => ({
      isChevronClicked: !state.isChevronClicked
    }));
  }

  render() {
    const { text } = this.props;
    const { isChevronClicked } = this.state;

    return (
      <div className="dropdown">
        <FontAwesomeIcon
          className="dropdown__icon"
          icon={isChevronClicked ? faChevronUp : faChevronDown}
          onClick={() => this.handleChevronClick()}
        />
        <Header text={text} />
        <div
          className={
            isChevronClicked ? 'dropdown__panel' : 'dropdown__panel_hidden'
          }
        >
          <ListItem name="test1" />
          <ListItem name="test2" />
          <ListItem name="test3" />
          <ListItem name="test1" />
          <ListItem name="test2" />
          <ListItem name="test3" />
        </div>
      </div>
    );
  }
}
