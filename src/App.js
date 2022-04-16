import React, { useState } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom"; // HERE

import Heroes from "./components/Heroes";
import HeroDetails from "./components/HeroDetails";
import Header from "./components/header/Header";


function App() {
  const [heroes, setHeroes] = useState([]);

  return (
    <div className="App">
      <Header heroes={heroes} />

      <Switch>
        <Route exact path="/">
          {" "}
          <Heroes heroes={heroes} setHeroes={setHeroes} />
        </Route>
        <Route
          exact
          path="/heroes/:id"
          render={(props) => (
            <HeroDetails
              heroes={heroes}
              setHeroes={setHeroes}
              id={props.match.params.id}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
