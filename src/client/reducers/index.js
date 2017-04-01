'use strict';

import * as actionEvents from '../actions/events';

export function data (state, action) {
  let actionType = action.type,
      newState = Object.assign({}, state);

  if (actionType === actionEvents.SET_API_DATA) {
    newState = action.payload;
  }
  return newState;
}

export function projectData (state, action) {
  let actionType = action.type,
      newState = Object.assign({}, state);

  if (actionType === actionEvents.SET_PROJECT_DATA) {
    newState = action.payload;
  }
  return newState;
}

export function filterData (state, action) {
  let actionType = action.type,
      newState = Object.assign({}, state);

  if (actionType === actionEvents.SET_FILTER_DATA) {
    newState = action.payload;
  }
  return newState;
}

export function sortData (state, action) {
  let actionType = action.type,
      newState = Object.assign({}, state);

  if (actionType === actionEvents.SET_SORT_DATA) {
    newState = action.payload;
  }
  return newState;
}
