import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import ListItem from '../ListItem';

import './SearchList.scss';

export default class SearchList extends React.Component {
  handleItemClick = id => {
    const { selectedItemIds, checkItem, uncheckItem } = this.props;
    if (selectedItemIds.includes(id)) {
      return uncheckItem(id);
    }
    return checkItem(id);
  };

  render() {
    const { className, items, selectedItemIds } = this.props;
    let searchListItems = null;

    const searchListClassName = classNames(className, {
      'search-list': true
    });

    if (items) {
      searchListItems = items.map(item => {
        return (
          <ListItem
            key={item.id}
            className="search-list__item"
            name={item.title}
            onClick={() => this.handleItemClick(item.id)}
            isChecked={selectedItemIds.includes(item.id)}
          />
        );
      });
    }

    return <ul className={searchListClassName}>{searchListItems}</ul>;
  }
}

SearchList.defaultProps = {
  className: ''
};

SearchList.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
  checkItem: PropTypes.func,
  uncheckItem: PropTypes.func,
  selectedItemIds: PropTypes.arrayOf(PropTypes.number)
};
