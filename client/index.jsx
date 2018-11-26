import ReactDOM from 'react-dom';
import React from 'react';
import store from './store/index.js';
import { Provider } from 'react-redux';

import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('app')
);
