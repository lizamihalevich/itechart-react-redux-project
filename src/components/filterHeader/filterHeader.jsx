import React from 'react';

import Header from '../header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import './filterHeader.scss';

export default class FilterHeader extends React.Component {
  render() {
    const { text } = this.props;
    return (
      <div className="filter-header">
        <FontAwesomeIcon className="filter-header__drag-icon" icon={faBars} />
        <Header text={text} />
        <FontAwesomeIcon className="filter-header__close-icon" icon={faTimes} />
      </div>
    );
  }
}
