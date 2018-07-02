/*global document alert*/

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import CardRender from './cardRender';
import _ from 'lodash';

function convertToArray (data) {
  if (typeof data === 'object') {
    data = $.map(data, function(value, index) {
       return [value];
    });
  }
  return data;
}

const cols = ['name', 'description', 'images'];

class HomePage extends React.Component {

render () {
  let data = this.props.data.data ? this.props.data.data : [],
      filterInput = this.props.filterData ? this.props.filterData : "",
      filteredData = data;
      if (filterInput.length > 0) {
        filteredData = filteredData.filter(hotel => hotel.name.toLowerCase().indexOf(filterInput.toLowerCase()) !== -1);
      }
      return (
        <div>
          <CardRender hotelList={filteredData} cols={cols}/>
        </div>
      );
  }
}

function select (state) {
  return {
    data: state.data,
    filterData: state.filterData
  };
}

export default connect(select)(HomePage);
