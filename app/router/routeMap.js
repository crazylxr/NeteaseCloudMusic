import React from "react";
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import MainPage from "../containers/MainPage/index";
import Account from "../containers/Account/index";
import Friend from "../containers/Friend/index";
import DiscoverMusic from "../containers/DiscoverMusic/index";

export default class RouterMap extends React.Component{
  render(){
    return (
      <Router>
        <div>
          <MainPage></MainPage>
          <div>
            <Route exact path='/' component={DiscoverMusic}></Route>
            <Route path='/account' component={Account}></Route>
            <Route path='/friend' component={Friend}></Route>
          </div>

        </div>
      </Router>
    );
  }
}
