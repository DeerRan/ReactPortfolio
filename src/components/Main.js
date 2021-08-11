import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Aboutme from './aboutme'
import Work from './work'
import Resume from './resume'


const Main = () => (
    <Router>
      <Switch>
        <Route exact path="/"> <Aboutme /> </Route>
        <Route path="/work" > <Work /> </Route>
        <Route path="/resume"> <Resume /> </Route>
      </Switch>
    </Router>
);

export default Main;