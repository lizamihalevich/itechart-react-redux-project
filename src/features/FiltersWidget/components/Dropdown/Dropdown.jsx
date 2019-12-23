import React from 'react';

import Header from '../Header';
import ListItem from '../ListItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import './Dropdown.scss';

export default class Dropdown extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false
    };
  }

  handleClick = () => {
    this.setState(state => ({
      isOpened: !state.isOpened
    }));
  };

  render() {
    const { header } = this.props;
    const { isOpened } = this.state;

    return (
      <div className="dropdown">
        <FontAwesomeIcon
          className="dropdown__icon"
          icon={isOpened ? faChevronUp : faChevronDown}
          onClick={this.handleClick}
        />
        <Header 
          onClick={this.handleClick} 
          header={header} 
        />

        {isOpened && (
          <div className="dropdown__panel">
            <ListItem name="test1" />
            <ListItem name="test2" />
            <ListItem name="test3" />
            <ListItem name="test1" />
            <ListItem name="test2" />
            <ListItem name="test3" />
          </div>
        )}
      </div>
    );
  }
}

Dropdown.propTypes = {
  header: PropTypes.string
};
