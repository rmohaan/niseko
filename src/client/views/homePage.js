/*global document alert*/

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import CardRender from './cardRender';
import _ from 'lodash';
import SearchInput, {createFilter} from 'react-search-input'

const KEYS_TO_FILTERS = ['name', 'description', 'standardPax', "maximumPax"];

class HomePage extends React.Component {
  render () {
    let data = this.props.rooms ? this.props.rooms.data : [],
        filterInput = this.props.filterData ? this.props.filterData : "",
        filteredData = data;
    if (filterInput.length > 0) {
      filteredData = filteredData.filter(createFilter(this.props.filterData, KEYS_TO_FILTERS));
    }
    return (
      <div>
        <CardRender roomList={filteredData} />
      </div>
    );
  }
}

function select (state) {
  return {
    rooms: state.rooms,
    filterData: state.filterData
  };
}

export default connect(select)(HomePage);
