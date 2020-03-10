import { combineReducers } from 'redux';
import filtersWidgetReducer from '../features/FiltersWidget/reducers';

const rootReducer = combineReducers({
  filtersWidget: filtersWidgetReducer
});

export default rootReducer;
