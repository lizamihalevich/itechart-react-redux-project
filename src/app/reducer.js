
import { createAction, createReducer, combineReducers } from '@reduxjs/toolkit';
import { getContexts } from './data';

const initialState = {};
const setContexts = createAction('SET_CONTEXTS');
const setDimensions = createAction('SET_DIMENSIONS');

const contexts = createReducer(initialState, {
  [setContexts]: Object.assign({}, state, {
    contexts: getContexts()
  })
  // [setDimensions]: Object.assign({}, state, {
  //   dimensions: getDimensions().map((dim, index) => {
  //     if (dim.contextId === )
  //   })
  // })
});
s;

const rootReducer = combineReducers({
  contexts
});


export default rootReducer;
