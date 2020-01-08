import { connect } from 'react-redux';
import Filter from '../components/Filter';

import { getData } from '../actions';

const mapDispatchToProps = () => {
  return {
    getData
  };
};

export default connect(null, mapDispatchToProps)(Filter);
