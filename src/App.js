import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <section className="container">
          <div className="row">
          </div>
        </section>
        <p className="App-intro">
          Hello!!! To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>Vlada 2!</div>
      </div>
    );
  }
}

export default App;
