import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AdminLayout } from './containers/admin';
import { HomeLayout } from './containers/home';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ HomeLayout } />
        </Switch>
      </Router>
    );
  }
}

export default App;
