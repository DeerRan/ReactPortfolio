import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Aboutme from './aboutme'
import Work from './work'
import Resume from './resume'


const Main = () => (
  <Router>
    <Switch>
      <Route path="/" component={Aboutme} />
      <Route path="/work" component={Work} />
      <Route path="/resume" component={Resume} />
    </Switch>
  </Router>
);

export default Main;