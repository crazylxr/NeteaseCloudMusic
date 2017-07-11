import React from "react";
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import DiscoverMusic from "../containers/DiscoverMusic/index";

export default class RouterMap extends React.Component{
  render(){
    return (
      <Router>
        <Route exact path='/' component={DiscoverMusic}/>
      </Router>
    );
  }
}
