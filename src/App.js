import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import {Switch, Route, Redirect} from "react-router-dom"
import Nav from "./Nav"
import Home from "./Home";
import './App.css';



function App() {
  return (
    <div>
    
      <Nav />

      <Switch>
        <Route exact path="/"  component={Home} />
        <Route exact path="./"  component={Home} />
        <Route exact path="./"  component={Home} />
        <Route exact path="./"  component={Home} />
        <Route exact path="./"  component={Home} />
      </Switch>
      
    </div>
  );
}

export default App;
