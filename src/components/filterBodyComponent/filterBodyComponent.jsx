import React from 'react';
import Dropdown from '../dropdown';
import PanelOffset from '../offset';
import './filterBodyComponent.scss';

export default class FilterBodyComponent extends React.Component {
  render() {
    const { filterName, filterInfo, children } = this.props;

    let dropdown = null,
      dropdownInfo = null,
      className = 'bodyComponent';

    if (filterName) {
      dropdown = <Dropdown text={filterName} />;
    }

    if (filterInfo) {
      dropdownInfo = (
        <div>
          <p className="bodyComponent__info">{filterInfo}</p>
        </div>
      );
    }

    return (
      <PanelOffset>
        <div
          className={
            dropdownInfo ? className : (className += ' bodyComponent_col')
          }
        >
          {dropdown}
          {dropdownInfo}
          {children}
        </div>
      </PanelOffset>
    );
  }
}
