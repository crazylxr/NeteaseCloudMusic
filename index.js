
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import React from 'react';
import ReactDom from 'react-dom';
import rootReducer from './src/reducers/rootReducer.js';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Login from "./src/components/login.js";

let store = createStore(rootReducer);

ReactDom.render((
  <Provider store={store}>
    <Router>
      <Route path='/login' component={Login}></Route>
    </Router>
  </Provider>
),
    document.getElementById('content')
);
