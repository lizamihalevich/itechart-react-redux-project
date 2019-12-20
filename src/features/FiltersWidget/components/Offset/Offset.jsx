import React from 'react';

import './Offset.scss';

export default class PanelOffset extends React.PureComponent {
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
