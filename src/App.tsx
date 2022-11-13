import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import { Route, Switch } from "wouter";
import { Landing } from './screens/Landing/Landing';
import { NotFound } from './screens/NotFound/NotFound';
import { SelectGame } from './screens/SelectGame/SelectGame';
import { Game } from './screens/Game/Game';


function App() {
  return (
    <Switch>
      <Route path="/ZKPDEMO">
        <Landing/>
      </Route>
      <Route path="/ZKPDEMO/SelectGame">
        <SelectGame/>
      </Route>
      <Route path='/ZKPDEMO/Game/:id'>
        {params => <Game id={params.id}/>}
      </Route>
      <Route>
        <NotFound/>
      </Route>
    </Switch>
  );
}

export default App;
