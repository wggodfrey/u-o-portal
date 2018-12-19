import { createStore, compose, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import debounce from 'redux-debounced';

import rootReducer from './../reducers/root.js';

export default createStore(rootReducer, compose(applyMiddleware(debounce(), promise(), thunk )));