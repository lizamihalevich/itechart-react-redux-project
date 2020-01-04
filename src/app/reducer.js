import { createReducer, combineReducers } from '@reduxjs/toolkit';

import { setContexts, setDimensions } from './actions';

const contexts = createReducer([], {
  [setContexts]: (state, action) => {
    const contexts = action.payload;
    return [...state, ...contexts];
  }
});

const dimensions = createReducer([], {
  [setDimensions]: (state, action) => {
    const dims = action.payload.dims.map(dim => {
      if (dim.contextId === action.payload.contextId) {
        return dim;
      }
    });

    return [...state, ...dims];
  }
});

const rootReducer = combineReducers({
  contexts,
  dimensions
});

export default rootReducer;
