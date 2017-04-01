/*global document alert*/

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import moment from 'moment';
import { Link } from 'react-router';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import CardRender from './cardRender';

function convertToArray (data) {
  if (typeof data === 'object') {
    data = $.map(data, function(value, index) {
       return [value];
    });
  }
  return data;
}

function compareDesc(property) {
  return function(a, b) {
      if (a[property] < b[property])
        return -1;
      if (a[property] > b[property])
        return 1;
      return 0;
    }
}

function compareAsc(property) {
  return function(a, b) {
    if (a[property] > b[property])
      return -1;
    if (a[property] < b[property])
      return 1;
    return 0;
  }
}

class HomePage extends React.Component {

render () {
  let data = this.props.data ? this.props.data : [],
      filterData = this.props.filterData ? this.props.filterData : "",
      sortData = this.props.sortData ? this.props.sortData : "",
      cols = ['s.no', 'amt.pledged', 'blurb', 'by', 'country', 'currency', 'end.time', 'location', 'percentage.funded', 'num.backers', 'state', 'title', 'type', 'url'],
      filtered = typeof data === 'object' ? convertToArray(data) : data,
      fil;
      if (filtered.length > 0) {
        filterData = typeof filterData === 'object' ? convertToArray(filterData).join('') : filterData;
        if (filterData.length > 0) {
          fil = filtered.filter(proj => proj.title.toLowerCase().indexOf(filterData.toLowerCase()) !== -1);
          filtered = typeof fil === 'object' ? convertToArray(fil) : fil;
        }
        if (sortData) {
          var sortDataText = sortData.text,
              sorter = sortData.sorter;
          if (sorter === 'percentage') {
            if (sortDataText === 'ASC') {
              fil = filtered.sort(compareAsc("percentage.funded"));
            }
            else {
              fil = filtered.sort(compareDesc("percentage.funded"));
            }
          } else {
            if (sortDataText === 'ASC') {
              fil = filtered.sort(compareAsc("end.time"));
            }
            else {
              fil = filtered.sort(compareDesc("end.time"));
            }
          }
          filtered = typeof fil === 'object' ? convertToArray(fil) : fil;
        }
        return (
          <div>
            <CardRender projectList={filtered} cols={cols}/>
          </div>
        );
      } else {
        return (
          <div>
             <div className="loader" height='100px' width='100px'>Testing and test working</div>
          </div>
        );
      }
  }
}

function select (state) {
  return {
    data: state.data,
    filterData: state.filterData,
    sortData: state.sortData
  };
}

export default connect(select)(HomePage);
