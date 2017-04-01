/*global document alert*/

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { Link } from 'react-router';
import moment from 'moment';

class CardRender extends React.Component {

  constructor ()  {
    super();
    this.generateProductLayout = (list, cols) => this._generateProductLayout(list, cols);
    this.generateNoDataFound = () =>  this._generateNoDataFound();
  }

  _generateProductLayout (list, cols) {
    return list.map((item, index) => {
      let nameDefClass = "font-remove-underline boldText",
          nameClass = "",
          titleText = item.title;
      if (item["percentage.funded"] > 1000 ) {
          nameClass = nameDefClass + " text-blue";
          titleText = "One of the Mosted funded project. More than 1000 funders";
      }
      else {
          nameClass = nameDefClass + " text-green";
      }
      var title = cols.map((colData, index) => {
        if (colData == 'title') {
          return (
            <div key={index}>
              <a href={`https://www.kickstarter.com/${item.url}`}
                 className={nameClass}
                 title={titleText}
                 target="blank">
              {item[colData]}
              </a>
              <span className="float-right" key={index+1}>
                {item.country}, {item.state}
              </span>
            </div>
          );
        }
      });

      var by = cols.map((colData, index) => {
        if (colData == 'by') {
          return (<div className="padding-left" key={index}> <span className="started-by"> founded by </span>{item[colData]} </div> );
        }
      });

      var plegde = cols.map((colData, index) => {
        if (colData == 'amt.pledged') {
          return (
            <div key={index}>
              <span className="started-by">Pledged</span>
              <span className="started-by glyphicon glyphicon-usd smaller-text"></span>
              {item[colData]}
            </div> );
        }
      });

      var funding = cols.map((colData, index) => {
        if (colData == 'percentage.funded') {
          return (
            <div key={index}>
              <span className="started-by"> Funding </span>
                {item[colData]}%
              <span className="started-by float-right">
                <span className="started-by">Pledged</span>
                <span className="started-by glyphicon glyphicon-usd smaller-text"></span>
                  {item['amt.pledged']}
              </span>
            </div>
            );
        }
      });

      var starterStatus = cols.map((colData, index) => {
        if (colData == 'end.time') {
          let ct = moment.utc(),
              et = moment(item[colData]),
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
            <div className={statusClass} key={index}>
              {text}
              <span className="started-by float-right"> Backers: {item['num.backers']} </span>
            </div> );
        }
      });
      var defClss = "col-md-12 w3-container w3-pale-blue w3-border-blue";
      var sidebarClass = item["percentage.funded"] > 1000 ? defClss + " w3-leftbar-red" : defClss + " w3-leftbar-green";
      return (
        <div className="col-md-6 height-control" key={index}>
          <div className={sidebarClass} key={index+1}>
                {title}
                {by}
                <br />
                {funding}
                {starterStatus}
            <Link to={`/view/${item["s.no"]}`}>View More</Link>
          </div>
        </div>
      );
    });
}

_generateNoDataFound () {
  return <div> No Data Found </div>;
}

render () {
    let list = this.props.projectList,
        cols = this.props.cols,
        header = '';
    if (this.props.projectList) {
      list = this.generateProductLayout(list, cols);
    }
    else {
      list = this.generateNoDataFound();
    }
    return (
      <div className="cardRender">
        {list}
      </div>
    );
  }
}

export default CardRender;
