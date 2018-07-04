'use strict';

import * as actionEvents from './events';
import * as dataRequests from './dataRequests';
import { push } from 'react-router-redux';

export function setRoomsData (data) {
  return {
    type: actionEvents.SET_ROOMS_DATA,
    payload: data
  };
}

export function updateRoomsOnFilter (query) {
  return {
    type: actionEvents.SET_FILTER_DATA,
    payload: query
  };
}

export function getRoomsData () {
  return function (dispatch) {
    return dataRequests.getRoomsData()
      .then(function (response) {
        dispatch(setRoomsData(response.data));
      })
      .catch(() => {
        dispatch(push('/'));
      });
  };
}