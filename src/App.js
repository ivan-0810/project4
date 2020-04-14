import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch } from "react-router-dom"
import Homepage from './Component/Homepage/Homepage';
import SpaceBlog from "./Component/SpaceBlog/SpaceBlog";
import Nastani from "./Component/nastani/Nastani";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/space-blog" component={SpaceBlog} />
            <Route path="/nastani" component={Nastani} />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
