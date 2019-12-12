import React from 'react';
import './searchMatch.scss';

export default class searchMatch extends React.Component {
  render() {
    return (
      <select className="searchMatch">
        <option className="searchMatch__option">.</option>
        <option className="searchMatch__option">.</option>
        <option className="searchMatch__option">.</option>
      </select>
    );
  }
}
