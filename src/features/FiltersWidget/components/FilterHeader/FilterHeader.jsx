import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import Header from '../Header';

import './FilterHeader.scss';

export default class FilterHeader extends React.PureComponent {
  render() {
    const { header } = this.props;
    return (
      <div className="filter-header">
        <FontAwesomeIcon className="filter-header__drag-icon" icon={faBars} />
        <Header className="filter-header__header" headerTitle={header} />
        <FontAwesomeIcon className="filter-header__close-icon" icon={faTimes} />
      </div>
    );
  }
}

FilterHeader.propTypes = {
  header: PropTypes.string.isRequired
};
