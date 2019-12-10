import React from 'react';
import Dropdown from '../dropdown';
import Offset from '../offset';
import './filterBodyComponent.scss';

export default class FilterBodyComponent extends React.Component {
  render() {
    const { filterName } = this.props;
    const { filterInfo } = this.props;
    return (
      <Offset>
        <div className="bodyComponent">
          <Dropdown text={filterName} />
          <p className="bodyComponent__info">{filterInfo}</p>
        </div>
      </Offset>
    );
  }
}
