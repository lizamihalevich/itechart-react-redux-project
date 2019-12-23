import React from 'react';

import PropTypes from 'prop-types';
import './Header.scss';

export default class Header extends React.PureComponent {
  render() {
    const { header, onClick } = this.props;
  return <h2 className="header-text" onClick={onClick}>{header}</h2>;
  }
}

Header.propTypes = {
  header: PropTypes.string
};
