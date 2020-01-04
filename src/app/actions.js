import { createAction } from '@reduxjs/toolkit';

const setContexts = createAction('SET_CONTEXTS');
const setDimensions = createAction('SET_DIMENSIONS', function prepare(
  dims,
  contextId
) {
  return {
    payload: {
      dims,
      contextId
    }
  };
});

export { setContexts, setDimensions };
