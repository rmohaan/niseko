'use strict';

import * as actionEvents from '../actions/events';

export function roomsData (state, action) {
  let actionType = action.type,
    newState = Object.assign({}, state);

  if (actionType === actionEvents.SET_ROOMS_DATA) {
    newState = action.payload;
  }
  return newState;
}

export function filterData (state, action) {
  let actionType = action.type,
    newState = state ? state : '';

  if (actionType === actionEvents.SET_FILTER_DATA) {
    newState = action.payload;
  }
  return newState;
}