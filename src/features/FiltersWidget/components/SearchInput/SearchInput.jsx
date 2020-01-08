import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import './SearchInput.scss';

export default class SearchInput extends React.PureComponent {
  render() {
    const { className } = this.props;
    const inputClassName = classNames(className, {
      'search-input': true
    });
    return <input className={inputClassName} type="text" />;
  }
}

SearchInput.defaultProps = {
  className: ''
};

SearchInput.propTypes = {
  className: PropTypes.string
};
