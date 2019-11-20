import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Create from './components/Create';
import Index from './components/Index';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <h2>Welcome to my React Axios Demo</h2>
          <ul>
            <li><Link to={'/create'}>Create</Link></li>
            <li><Link to={'/index'}>List</Link></li>
          </ul>
          <hr />
          <Switch>
            <Route exact path='/create' component={Create} />
            <Route exact path='/index' component={Index} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;