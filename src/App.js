import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import config from "./config";
class App extends Component {
  state = {
    items: []
  };
  render() {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${
      config.spreadsheetId
    }/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=${config.apiKey}`;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
