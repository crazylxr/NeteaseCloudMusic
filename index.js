
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
import Home from "./src/components/homepage.js";

let store = createStore(rootReducer);

ReactDom.render((
  <Provider store={store}>
    <Router>
        <div>
          <Route path='/login' component={Login}></Route>
          <Route path='/home' component={Home}></Route>
        </div>
    </Router>
  </Provider>
),
    document.getElementById('content')
);
