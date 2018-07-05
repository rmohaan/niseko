import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from '../../src/client/reducers';
import defaultState from './defaultState';

const reducer = combineReducers({
  rooms: reducers.roomsData,
  filterData: reducers.filterData
});

const store = createStore(reducer, defaultState, compose(
  applyMiddleware(thunk)
));

export default store;
