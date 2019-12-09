import React from 'react';
import './header.scss';

export default class Header extends React.Component {
  render() {
    const { text } = this.props;
    return <h2 className="headerText">{text}</h2>;
  }
}
