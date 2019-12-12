import React from 'react';
import './searchSort.scss';

export default class SearchSort extends React.Component {
  render() {
    const { range } = this.props;
    return <button className="searchSort">{range}</button>;
  }
}
