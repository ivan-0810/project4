import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch } from "react-router-dom"
import Homepage from './Component/Homepage/Homepage';
import SpaceBlog from "./Component/SpaceBlog/SpaceBlog";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/space-blog" component={SpaceBlog} />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
