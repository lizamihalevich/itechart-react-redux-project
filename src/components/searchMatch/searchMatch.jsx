import React from 'react';

import './searchMatch.scss';

export default class searchMatch extends React.Component {
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
