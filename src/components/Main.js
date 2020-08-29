import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ExperiencePage from './ExperiencePage';
import ProjectsPage from './ProjectsPage';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/personal-website' component={HomePage}></Route>
      <Route exact path='/about' component={AboutPage}></Route>
      <Route exact path='/experience' component={ExperiencePage}></Route>
      <Route exact path='/projects' component={ProjectsPage}></Route>
    </Switch>
  );
}

export default Main;