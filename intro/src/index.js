import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var app = (
  <div>
    <App name="Max" year="28" />
    <App name="Manu" year="29" />
  </div>
);

ReactDOM.render(app, document.getElementById('p1'));
registerServiceWorker();
