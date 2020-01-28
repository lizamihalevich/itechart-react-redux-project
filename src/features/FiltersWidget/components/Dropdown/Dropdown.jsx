import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import useOutsideClick from '../../hooks/useOutsideClick';
import Header from '../Header';
import ListItem from '../ListItem';

import './Dropdown.scss';

const Dropdown = ({
  selectedItemIds,
  checkItem,
  items,
  header,
  uncheckItem
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const className = classNames('dropdown', {
    dropdown_unclickable: items.length === 0
  });

  const handleClick = useCallback(() => {
    setIsOpened(!isOpened);
  }, [isOpened]);

  const handleItemClick = id => {
    if (selectedItemIds.includes(id)) {
      return uncheckItem(id);
    }
    return checkItem(id);
  };

  const ref = useOutsideClick(() => setIsOpened(false));

  const getListItems = () => {
    let listItems = null;
    if (items) {
      listItems = items.map(item => {
        return (
          <ListItem
            key={item.id}
            name={item.title}
            className="dropdown__list-item"
            onClick={() => handleItemClick(item.id)}
            isChecked={selectedItemIds.includes(item.id)}
          />
        );
      });
    }
    return listItems;
  };

  return (
    <div ref={ref} className={className}>
      <FontAwesomeIcon
        className="dropdown__icon"
        icon={isOpened ? faChevronUp : faChevronDown}
        onClick={handleClick}
      />
      <Header onClick={handleClick} headerTitle={header} />

      {isOpened && <div className="dropdown__panel">{getListItems()}</div>}
    </div>
  );
};

Dropdown.propTypes = {
  header: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.any.isRequired
    })
  ),
  checkItem: PropTypes.func,
  uncheckItem: PropTypes.func,
  selectedItemIds: PropTypes.arrayOf(PropTypes.number)
};

Dropdown.defaultProps = {
  header: '',
  items: []
};

export default Dropdown;
