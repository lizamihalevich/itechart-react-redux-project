import { createReducer } from '@reduxjs/toolkit';

import { selectDimensions, getData, selectFilters } from '../actions';

const reducer = createReducer(
  {},
  {
    [getData]: (state, action) => {
      state.contexts = action.payload.contexts;
      state.dimensions = action.payload.dimensions;
      state.filters = action.payload.filters;
    },

    [selectDimensions]: (state, action) => {
      state.selectedDims = state.dimensions.filter(
        dim => dim.contextId === action.payload.id
      );
    },

    [selectFilters]: (state, action) => {
      state.selectedFilters = state.filters.filter(
        filter => filter.dimensionId === action.payload.id
      );
    }
  }
);

export default reducer;
