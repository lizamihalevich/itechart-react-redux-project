import React from 'react';

import './offset.scss';

export default class PanelOffset extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="panel-offset">
        <div className="panel-offset__offset"></div>
        {children}
      </div>
    );
  }
}
