import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import {
  EXACT_SEARCH_DISPLAY,
  PARTIAL_SEARCH_DISPLAY,
  STARTS_WITH_SEARCH_DISPLAY,
  EXACT_MATCH,
  PARTIAL_MATCH,
  STARTS_WITH
} from '../../constants';
import './SearchMatch.scss';

export default class SearchMatch extends React.PureComponent {
  handleChange = e => {
    const { setSearchType } = this.props;

    switch (e.target.value) {
      case EXACT_SEARCH_DISPLAY:
        setSearchType(EXACT_MATCH);
        break;
      case PARTIAL_SEARCH_DISPLAY:
        setSearchType(PARTIAL_MATCH);
        break;
      case STARTS_WITH_SEARCH_DISPLAY:
        setSearchType(STARTS_WITH);
        break;
      default:
        setSearchType(EXACT_MATCH);
        break;
    }
  };

  render() {
    const { className } = this.props;

    const searchMatchClassName = classNames(className, {
      'search-match': true
    });
    return (
      <select className={searchMatchClassName} onChange={this.handleChange}>
        <option className="search-match__option">{EXACT_SEARCH_DISPLAY}</option>
        <option className="search-match__option">
          {PARTIAL_SEARCH_DISPLAY}
        </option>
        <option className="search-match__option">
          {STARTS_WITH_SEARCH_DISPLAY}
        </option>
      </select>
    );
  }
}

SearchMatch.defaultProps = {
  className: ''
};

SearchMatch.propTypes = {
  className: PropTypes.string,
  setSearchType: PropTypes.func
};
