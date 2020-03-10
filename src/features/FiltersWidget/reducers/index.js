import { createReducer } from '@reduxjs/toolkit';

import {
  setData,
  checkContext,
  checkDimension,
  checkFilter,
  setSearchString,
  setSearchType,
  setSortType,
  uncheckContext,
  uncheckDimension,
  uncheckFilter
} from '../actions';

import { ASCENDING, EXACT_MATCH } from '../constants';

const reducer = createReducer(
  {
    contexts: [],
    dimensions: [],
    filters: [],

    selectedContextIds: [],
    selectedDimensionIds: [],
    selectedFilterIds: [],

    searchString: '',
    searchType: EXACT_MATCH,
    sortType: ASCENDING
  },
  {
    [setData]: (state, action) => {
      state.contexts = action.payload.contexts;
      state.dimensions = action.payload.dimensions;
      state.filters = action.payload.filters;
    },

    [checkContext]: (state, action) => {
      state.selectedContextIds.push(action.payload);
    },

    [uncheckContext]: (state, action) => {
      const index = state.selectedContextIds.findIndex(
        item => item === action.payload
      );
      state.selectedContextIds.splice(index, 1);
    },

    [checkDimension]: (state, action) => {
      state.selectedDimensionIds.push(action.payload);
    },

    [uncheckDimension]: (state, action) => {
      const indices = Array.isArray(action.payload)
        ? action.payload
        : [action.payload];

      indices.forEach(id => {
        const index = state.selectedDimensionIds.findIndex(item => item === id);
        if (index > -1) {
          state.selectedDimensionIds.splice(index, 1);
        }
      });
    },

    [checkFilter]: (state, action) => {
      state.selectedFilterIds.push(action.payload);
    },

    [uncheckFilter]: (state, action) => {
      const indices = Array.isArray(action.payload)
        ? action.payload
        : [action.payload];

      indices.forEach(id => {
        const index = state.selectedFilterIds.findIndex(item => item === id);
        if (index > -1) {
          state.selectedFilterIds.splice(index, 1);
        }
      });
    },

    [setSearchString]: (state, action) => {
      state.searchString = action.payload;
    },

    [setSearchType]: (state, action) => {
      state.searchType = action.payload;
    },

    [setSortType]: (state, action) => {
      state.sortType = action.payload;
    }
  }
);

export default reducer;
