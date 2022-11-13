import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import { Route, Switch } from "wouter";
import { Landing } from './screens/landing/Landing';
import { NotFound } from './screens/NotFound/NotFound';


function App() {
  return (
    <Switch>
      <Route path="/">
        <Landing/>
      </Route>
      <Route>
        <NotFound/>
      </Route>
    </Switch>
  );
}

export default App;
