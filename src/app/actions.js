import { createAction } from '@reduxjs/toolkit';

const setContexts = createAction('SET_CONTEXTS');
const setDimensions = createAction('SET_DIMENSIONS');

export { setContexts, setDimensions };