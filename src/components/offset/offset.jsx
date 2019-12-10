import React from 'react';
import './offset.scss';

export default class PanelOffset extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="panelOffset">
        <div className="panelOffset__offset"></div>
        {children}
      </div>
    );
  }
}
