import React from 'react';
import './offset.scss';

export default class PanelOffset extends React.Component {
  render() {
    const { component } = this.props;
    return (
      <div className="panelOffset">
        <div className="panelOffset__offset"></div>
        {component}
      </div>
    );
  }
}
