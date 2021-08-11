import React from 'react'
import { Switch, Route } from 'react-router-dom';
import aboutme from './aboutme'
import work from './work'
import resume from './resume'


const Main = () => (
  <Switch>
    <Route path="/" component={aboutme} />
    <Route path="/work" component={work} />
    <Route path="/resume" component={resume} />
  </Switch>
);

export default Main;