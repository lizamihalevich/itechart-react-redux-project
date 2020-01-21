import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import './Offset.scss';

export default class PanelOffset extends React.PureComponent {
  render() {
    const { children, className } = this.props;

    const panelOffsetClassName = classNames(className, {
      'panel-offset': true
    });
    return (
      <div className={panelOffsetClassName}>
        <div className="panel-offset__offset" />
        {children}
      </div>
    );
  }
}

PanelOffset.defaultProps = {
  className: ''
};

PanelOffset.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};
