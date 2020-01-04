
import { createReducer, combineReducers } from '@reduxjs/toolkit';

import { setContexts } from './actions';

//let state = {};

const contexts = createReducer([], {
  [setContexts]: (state, action) => {
    const contexts = action.payload
    return [...state, ...contexts]
  },
  })
  // [setDimensions]: Object.assign({}, state, {
  //   dimensions: getDimensions().map((dim, index) => {
  //     if (dim.contextId === )
  //   })
  // })

const rootReducer = combineReducers({
  contexts
});


export default rootReducer;
