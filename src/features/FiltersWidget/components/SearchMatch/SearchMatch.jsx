import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import { EXACT_MATCH, MATCH } from '../../constants';
import './SearchMatch.scss';

export default class SearchMatch extends React.PureComponent {
  handleChange = e => {
    const { setSearchType } = this.props;

    setSearchType(MATCH[e.target.value] || EXACT_MATCH);
  };

  render() {
    const { className } = this.props;

    const searchMatchClassName = classNames('search-match', className);

    return (
      <select className={searchMatchClassName} onChange={this.handleChange}>
        {Object.keys(MATCH).map(item => {
          return (
            <option key={item} className="search-match__option">
              {item}
            </option>
          );
        })}
      </select>
    );
  }
}

SearchMatch.propTypes = {
  className: PropTypes.string,
  setSearchType: PropTypes.func
};

SearchMatch.defaultProps = {
  className: ''
};
