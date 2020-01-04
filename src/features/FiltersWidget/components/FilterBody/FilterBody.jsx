import React from 'react';

import PanelOffset from '../Offset';
import FilterBodyDropdown from '../FilterBodyDropdown';
import { connect } from 'react-redux';

import './FilterBody.scss';
import FilterBodySearchList from '../FilterBodySearchList';

class FilterBody extends React.PureComponent {
  render() {
    const filterInfo = 'FilterInfo random text random text random text';
    return (
      <div className="filter-body">
        <FilterBodyDropdown filterName="Contexts" filterInfo={filterInfo} items={this.props.contexts}/>
        <FilterBodyDropdown filterName="Dimensions" filterInfo={filterInfo} items={this.props.contexts}/>
        <FilterBodySearchList />
        <PanelOffset className="filter-body__footer"></PanelOffset>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { contexts: state.contexts };
};

export default connect(mapStateToProps)(FilterBody);