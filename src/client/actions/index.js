'use strict';

import * as actionEvents from './events';
import * as dataRequests from './dataRequests';
import { push } from 'react-router-redux';


export function setData (data) {
  return {
    type: actionEvents.SET_DATA,
    payload: data
  };
}

export function setAPIData (data) {
  return {
    type: actionEvents.SET_API_DATA,
    payload: data
  };
}

export function setProjectData (data) {
  return {
    type: actionEvents.SET_PROJECT_DATA,
    payload: data
  };
}

export function updateProjectsonFilter (query) {
  return {
    type: actionEvents.SET_FILTER_DATA,
    payload: query
  };
}

export function updateProjectsonSort (query) {
  console.log("hit updateProjectsonSort");
  return {
    type: actionEvents.SET_SORT_DATA,
    payload: query
  };
}

export function fetchData () {
  return function (dispatch) {
    // dispatch(fetchingData());
    return dataRequests.fetchData()
       .then(function (response) {
         if (response.status === 200) {
           dispatch(setData(response.data));
         }
       })
       .catch((err) => {
          dispatch(push('/'))
       });
  };
}

export function fetchAPIData () {
  console.log("hit fetAPIData");
  return function (dispatch) {
    // dispatch(fetchingData());
    return dataRequests.fetchAPIData()
       .then(function (response) {
         dispatch(setAPIData(response.data));
       })
       .catch((err) => {
         console.log(err);
          dispatch(push('/'))
       });
  };
}

export function fetchProject (id) {
  console.log("hit fetchProject");
  return function (dispatch) {
    return dataRequests.fetchAPIData()
       .then(function (response) {
         console.log(response.data);
         var proj = response.data.find( i => i["s.no"] == id);

         dispatch(setProjectData(proj));
       })
       .catch((err) => {
         console.log(err);
          dispatch(push('/'))
       });
  };
}
