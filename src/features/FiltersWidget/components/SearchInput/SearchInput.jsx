import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import './SearchInput.scss';

export default class SearchInput extends React.PureComponent {
  render() {
    const { className, setSearchString } = this.props;
    const inputClassName = classNames('search-input', className);
    return (
      <input
        className={inputClassName}
        type="text"
        onChange={e => setSearchString(e.target.value)}
      />
    );
  }
}

SearchInput.propTypes = {
  className: PropTypes.string,
  setSearchString: PropTypes.func
};

SearchInput.defaultProps = {
  className: ''
};
