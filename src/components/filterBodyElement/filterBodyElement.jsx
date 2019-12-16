import React from 'react';

import classNames from 'classnames';
import Dropdown from '../dropdown';
import PanelOffset from '../offset';
import './filterBodyElement.scss';

export default class FilterBodyElement extends React.Component {
  render() {
    const { filterName } = this.props;
    const { filterInfo } = this.props;
    const { children } = this.props;

    let dropdown = null,
      dropdownInfo = null,
      elemClass;

    if (filterName) {
      dropdown = <Dropdown text={filterName} />;
    }

    if (filterInfo) {
      dropdownInfo = (
        <div>
          <p className="filter-body-element__info">{filterInfo}</p>
        </div>
      );
    }

    elemClass = classNames({
      'filter-body-element': true,
      'filter-body-element_col': !dropdownInfo
    });

    return (
      <PanelOffset>
        <div className={elemClass}>
          {dropdown}
          {dropdownInfo}
          {children}
        </div>
      </PanelOffset>
    );
  }
}
