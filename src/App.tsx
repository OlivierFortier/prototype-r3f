//@ts-nocheck
import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Scene from "./components/Scene";
import ScenePhysique from "./components/ScenePhysique";

// simple routeur pour démontrer plusieurs fonctionnalités
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Scene />
        </Route>
        <Route path="/physique">
          <ScenePhysique />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
