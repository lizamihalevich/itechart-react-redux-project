import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Header from '../header';
import './filterHeader.scss';

export default class FilterHeader extends React.Component {
  render() {
    const { text } = this.props;
    return (
      <div className="filterHeader">
        <FontAwesomeIcon className="filterHeader__drag-icon" icon={faBars} />
        <Header text={text} />
        <FontAwesomeIcon className="filterHeader__close-icon" icon={faTimes} />
      </div>
    );
  }
}