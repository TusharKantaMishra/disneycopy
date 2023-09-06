import React from "react";
// import { createRoot } from 'react-dom/client';
import './App.css';
import Headder from './components/Headder';
import Home from './components/Home';
import Detail from './components/Detail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Headder/>
        <Switch>
          <Route path="/detail">
            <Detail/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
