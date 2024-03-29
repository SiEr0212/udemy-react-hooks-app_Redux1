import React from "react";
import "./App.css";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import HomePage from "./pages/homePage";
import DepositPage from "./pages/depositPage";
import WithdrawPage from "./pages/withdrawPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <ul className="ul-style">
            <li className="li-style">
              <NavLink className="App-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="li-style">
              <NavLink className="App-link" to="/deposit">
                Deposit
              </NavLink>
            </li>
            <li className="li-style">
              <NavLink className="App-link" to="/withdraw">
                Withdraw
              </NavLink>
            </li>
          </ul>

          <Route exact path="/" component={HomePage} />
          <Route exact path="/deposit" component={DepositPage} />
          <Route exact path="/withdraw" component={WithdrawPage} />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
