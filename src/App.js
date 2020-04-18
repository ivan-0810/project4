import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch } from "react-router-dom"
import Homepage from './Component/Homepage/Homepage';
import SpaceBlog from "./Component/SpaceBlog/SpaceBlog";
import Nastani from "./Component/nastani/Nastani";
import Prostor_za_nastani from "./Component/Prostor_za_nastani/Prostor_za_nastani";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/space-blog" component={SpaceBlog} />
            <Route path="/nastani" component={Nastani} />
            <Route path="/prostor_za_nastani" component={Prostor_za_nastani} /> 
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
