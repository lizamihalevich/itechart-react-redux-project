import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import Header from '../Header';
import ListItem from '../ListItem';

import './Dropdown.scss';

export default class Dropdown extends React.PureComponent {
  state = {
    isOpened: false
  };

  handleClick = () => {
    this.setState(state => ({
      isOpened: !state.isOpened
    }));
  };

  render() {
    const { header, items, selectedItemIds, checkItem } = this.props;
    const { isOpened } = this.state;
    let listItems = null;

    if (items) {
      listItems = items.map(item => {
        return (
          <ListItem
            key={item.id}
            name={item.title}
            onClick={() => checkItem(item.id)}
            isChecked={selectedItemIds.includes(item.id)}
          />
        );
      });
    }

    return (
      <div className="dropdown">
        <FontAwesomeIcon
          className="dropdown__icon"
          icon={isOpened ? faChevronUp : faChevronDown}
          onClick={this.handleClick}
        />
        <Header onClick={this.handleClick} headerTitle={header} />

        {isOpened && <div className="dropdown__panel">{listItems}</div>}
      </div>
    );
  }
}

Dropdown.defaultProps = {
  header: '',
  items: []
};

Dropdown.propTypes = {
  header: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.any.isRequired
    })
  ),
  checkItem: PropTypes.func,
  selectedItemIds: PropTypes.arrayOf(PropTypes.number)
};
