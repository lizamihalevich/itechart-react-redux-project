import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PanelOffset from '../Offset';
import FilterBodyDropdown from '../FilterBodyDropdown';
import FilterBodySearchList from '../FilterBodySearchList';

import './FilterBody.scss';

class FilterBody extends React.PureComponent {
  render() {
    const { contexts, dimensions } = this.props;
    const filterInfo = 'FilterInfo random text random text random text';
    return (
      <div className="filter-body">
        <FilterBodyDropdown
          filterName="Contexts"
          filterInfo={filterInfo}
          items={contexts}
        />
        <FilterBodyDropdown
          filterName="Dimensions"
          filterInfo={filterInfo}
          items={dimensions}
        />
        <FilterBodySearchList />
        <PanelOffset className="filter-body__footer" />
      </div>
    );
  }
}

FilterBody.propTypes = {
  contexts: PropTypes.arrayOf(PropTypes.object),
  dimensions: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = state => {
  return {
    contexts: state.filtersWidget.contexts,
    dimensions: state.filtersWidget.dimensions
  };
};

export default connect(mapStateToProps)(FilterBody);
