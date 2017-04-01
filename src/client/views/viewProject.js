/*global document alert*/

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import * as actions from '../actions/index';
import { Link } from 'react-router';
import moment from 'moment';

class ViewProject extends React.Component {

constructor ()  {
  super();
  this.goBack = () => this._goBack();
}

_goBack () {
  this.props.dispatch(push('/'))
}

render () {
    let item = this.props.project;
    if (!item) {
      return (
        <div>
           <div className="loader" height='100px' width='100px'>Testing and test working</div>
        </div>);
    }
        let ct = moment.utc(),
        et = moment(item["end.time"]),
        dif = ct.diff(et, 'days'),
        text = "",
        statusClass = "";

      if (dif > 0) {
        statusClass = statusClass + "text-red";
        text = "Ended " + dif + " days ago.";
      }
      else {
        statusClass = statusClass + "text-green";
        text = "Live till " + et.format('YYYY-MM-DD HH:mm:ss') + ".";
      }

    return (
      <div className="container-fluid">
        <h1 className="page-header text-align-center">
          <a href={`https://www.kickstarter.com/${item.url}`} target="blank">
            {item.title}
          </a>
          <span className="float-right">
            {item.country}, {item.state}
          </span>
        </h1>
        <div className="container">
          <div className="col-md-8">

            <div> <p> {item.blurb} </p> </div>
            <div>
              <span className="started-by"> Founded by </span>
              {item.by}
            </div>
            <div>
              <span className="started-by"> Founded at </span>
              {item.location}
            </div>
              <br />
            <div>
              <span className="started-by"> Funding </span>
                {item["percentage.funded"]}%
              <span className="started-by float-right">
                <span className="started-by">Pledged: </span>
                <span className="started-by smaller-text"></span>
                  {item["amt.pledged"] ? item["amt.pledged"].toLocaleString(item.currency, { style: 'currency', currency: item.currency }) : ""}
              </span>
            </div>

            <div className={statusClass}>
              {text}
              <span className="started-by float-right"> Backers: {item['num.backers']} </span>
            </div>
          </div>
        </div>
        <div>
          <hr/>
          <div>
            <button className="btn btn-default" onClick={this.goBack}>Back</button>
            <span className="float-right">
              <a className="btn btn-primary" href={`https://www.kickstarter.com/${item.url}`} target="blank">Visit Page</a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

function select (state) {
  return {
    project: state.projectData
  };
}

export default connect(select)(ViewProject);
