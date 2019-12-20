import React from 'react';

import PropTypes from 'prop-types';
import Header from '../Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import './FilterHeader.scss';

export default class FilterHeader extends React.PureComponent {
  render() {
    const { header } = this.props;
    return (
      <div className="filter-header">
        <FontAwesomeIcon className="filter-header__drag-icon" icon={faBars} />
        <Header header={header} />
        <FontAwesomeIcon className="filter-header__close-icon" icon={faTimes} />
      </div>
    );
  }
}

FilterHeader.propTypes = {
  header: PropTypes.string
};
