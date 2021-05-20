import React from "react";
import "./App.css";
import { BrowserRouter, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
        <ul>
          <li><NavLink>Home</NavLink></li>
          <li><NavLink>Deposit</NavLink></li>
          <li><NavLink>Withdraw</NavLink></li>
        </ul>

          <Route path="/" />
          <Route path="/deposit" />
          <Route path="/withdraw" />
          
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
