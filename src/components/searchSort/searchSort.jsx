import React from 'react';

export default class SearchSort extends React.Component {
  render() {
    const { range } = this.props;
    return <button className="searchSort">{range}</button>;
  }
}
