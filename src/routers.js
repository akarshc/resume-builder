import React from 'react';
import Home from './Components/Home';
import Build from './Components/Build';
import View from './Components/View';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Routers = () => {
    return (
        <Router>
          <Switch>
                      <Route exact key="home" path='/' component={Home} />
                      <Route exact key="build" path='/build' component={Build} />
                      <Route exact key="view" path='/view' component={View} />
          </Switch>
         </Router>
    );
  }
  
  export default Routers;