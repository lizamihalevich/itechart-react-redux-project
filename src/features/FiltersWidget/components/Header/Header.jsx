import React from 'react';

import PropTypes from 'prop-types';
import './Header.scss';

export default class Header extends React.PureComponent {
  render() {
    const { header } = this.props;
    return <h2 className="header-text">{header}</h2>;
  }
}

Header.propTypes = {
  header: PropTypes.string
};
