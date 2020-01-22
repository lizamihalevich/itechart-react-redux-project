import React from 'react';

import classNames from 'classnames';
import PropTypes, { string } from 'prop-types';
import './Header.scss';

export default class Header extends React.PureComponent {
  render() {
    const { headerTitle, onClick, className } = this.props;

    const headerClassName = classNames('header', className);
    return (
      <h2 className={headerClassName} onClick={onClick}>
        {headerTitle}
      </h2>
    );
  }
}

Header.propTypes = {
  headerTitle: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: string
};
