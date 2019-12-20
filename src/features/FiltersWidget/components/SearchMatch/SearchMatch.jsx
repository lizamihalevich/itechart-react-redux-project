import React from 'react';

import './SearchMatch.scss';

export default class searchMatch extends React.PureComponent {
  render() {
    return (
      <select className="search-match">
        <option className="search-match__option">.</option>
        <option className="search-match__option">.</option>
        <option className="search-match__option">.</option>
      </select>
    );
  }
}
