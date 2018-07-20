import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as Util from './utils.js'

document.addEventListener("DOMContentLoaded", () => {
  window.fetchUsers = Util.fetchUsers
  ReactDOM.render(<App />, document.getElementById('root'));
  registerServiceWorker();
})
