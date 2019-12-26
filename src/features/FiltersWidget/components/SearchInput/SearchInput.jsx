import React from 'react';

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
