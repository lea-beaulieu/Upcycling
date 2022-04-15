import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom'; // HERE

import Heroes from './components/Heroes';
import HeroDetails from './components/HeroDetails';
import Header from './components/header/Header'

function App() {
  return (
    <div className="App">
    <Header />

    <Switch> 
      <Route exact path="/" component={Heroes}/>
      <Route exact path="/heroes/:id" component={HeroDetails}/>
    </Switch>

  </div>
  );
}

export default App;
