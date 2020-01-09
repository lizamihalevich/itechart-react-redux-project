import { createReducer } from '@reduxjs/toolkit';

import {
  selectDimensions,
  selectFilters,
  setData,
  checkContext,
  checkDimension,
  checkFilter
} from '../actions';

const reducer = createReducer(
  {
    contexts: [],
    dimensions: [],
    filters: [],

    selectedContextIds: [],
    selectedDimensionIds: [],
    selectedFilterIds: []
  },
  {
    [setData]: (state, action) => {
      state.contexts = action.payload.contexts;
      state.dimensions = action.payload.dimensions;
      state.filters = action.payload.filters;
    },

    [checkContext]: (state, action) => {
      const index = state.selectedContextIds.findIndex(
        item => item === action.payload
      );

      if (index === -1) {
        state.selectedContextIds.push(action.payload);
      } else {
        state.selectedContextIds.splice(index, 1);
      }
    },

    [checkDimension]: (state, action) => {
      const index = state.selectedDimensionIds.findIndex(
        item => item === action.payload
      );

      if (index === -1) {
        state.selectedDimensionIds.push(action.payload);
      } else {
        state.selectedDimensionIds.splice(index, 1);
      }
    },

    [checkFilter]: (state, action) => {
      const index = state.selectedFilterIds.findIndex(
        item => item === action.payload
      );

      if (index === -1) {
        state.selectedFilterIds.push(action.payload);
      } else {
        state.selectedFilterIds.splice(index, 1);
      }
    },

    [selectDimensions]: (state, action) => {
      state.selectedDims = state.dimensions.filter(
        dim => dim.contextId === action.payload.id // in container
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
