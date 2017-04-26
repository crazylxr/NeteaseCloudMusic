//main.js
import React from 'react';
import ReactDom from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Login from "./src/components/login.js";

ReactDom.render((
  <Router>
    <Route path='/login' component={Login}></Route>
  </Router>
),
    document.getElementById('content')
);
