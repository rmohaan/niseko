/*global document alert*/

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

export default class Footer extends React.Component {
render () {
    return (
      <div className="container footer-container">
        <footer>
          <p className="text-footer">
            <a href='https://stay.kiniseko.com/en/'> HTM </a> &copy; 2018.  All rights reserved. 
          </p>
        </footer>
     </div>
    );
  }
}