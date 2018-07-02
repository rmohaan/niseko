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
    String.prototype.toProperCase = function () {
      return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    };
    this.generateProductLayout = (list, cols) => this._generateProductLayout(list, cols);
    this.generateNoDataFound = () =>  this._generateNoDataFound();
  }

  _generateProductLayout (list, cols) {
    return list.map((item, index) => {
      let nameDefClass = "font-remove-underline boldText",
          nameClass = "",
          titleText = item.name;

      return (
        <div className="col-md-12 card" key={index}>
          <div className="card-content">
            <img className="card-image" src={item.images[0] != undefined ? item.images[0] : "http://www.dharitri.com/assets_news/images/7770060.jpg"} height="225px" width="225px" />
            <div className="card-info"> 
              <div className="card-name">
                {item.name.toProperCase()}
              </div>
              <div className="card-desc">
                {item.description}
              </div>
              <div className="card-room-details">
                Room Details
                <div className="card-room-spec">
                  Bedroom: {item.bathrooms}
                </div>
                <div className="card-room-spec">
                  Occupancy: {item.standardPax}
                </div>
                <div className="card-room-spec">
                  Max. Occupancy: {item.maximumPax}
                </div>
                <div className="card-room-spec">
                  Floor Sizing: {item.floorArea}sqm
                </div>
                <div className="card-room-spec">
                  Ready To Occupy: {item.status === "healthy" ? "Yes" : "No" }
                </div>
              </div>
            </div>
            <div className="card-amenities">
              <div className="card-amenities-head"> 
                Amenities
              </div>
              <ul className="card-amenities-list">
                <li>
                  <i className={item.amenities.aircon ? "fa fa-check card-available" : "fa fa-times card-unavailable"}></i> 
                  <span>Air Conditioned</span>
                </li>
                <li>
                  <i className={item.amenities.hdtv ? "fa fa-check card-available" : "fa fa-times card-unavailable"}></i> 
                  <span>Free satellite TV with English language channels </span>
                </li>
                <li>
                  <i className={item.amenities.btspeakers ? "fa fa-check card-available" : "fa fa-times card-unavailable"}></i> 
                  <span>5.1 Bluetooth surround system</span>
                </li>
                <li>
                  <i className={item.amenities.cardkey ? "fa fa-check card-available" : "fa fa-times card-unavailable"}></i> 
                  <span>Handy portable card key</span>
                </li>
                <li>
                  <i className={item.amenities.chromecast ? "fa fa-check card-available" : "fa fa-times card-unavailable"}></i> 
                  <span>Application Streaming</span>
                </li>
                <li>
                  <i className={item.amenities.jacuzzi ? "fa fa-check card-available" : "fa fa-times card-unavailable"}></i> 
                  <span>Whirlpool bathtubs</span>
                </li>
                <li>
                  <i className={item.amenities.fireplace ? "fa fa-check card-available" : "fa fa-times card-unavailable"}></i> 
                  <span>Dedicated Fireplace</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    });
}

_generateNoDataFound () {
  return (
    <div className="col-md-12 card">
      <div className="card-content-no-data">
        No Data Found 
      </div>
    </div>
  );
}

render () {
    let list = this.props.hotelList,
        cols = this.props.cols,
        header = '';
    if (list.length > 0) {
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
