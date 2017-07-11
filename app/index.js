import React from 'react';
import {render} from 'react-dom';

import RouteMap from "./router/routeMap";


class App extends React.Component {
    render() {
        return (
          <RouteMap></RouteMap>
        )
    }
}
render(<App />, document.getElementById('app'));
