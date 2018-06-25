import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// the components
import Calendar from "./compontens/Calendar";

class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Calendar Apps</h1>
        </header>
        <main>
          <Calendar />
        </main>
      </div>
    );
  }
}

export default App;
