import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome'
import SignIn from './components/SignIn'
import ViewVideo from './components/ViewVideo'
import PhotoGallery from './components/PhotoGallery'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          < NavBar />
          <img src={logo} className="App-logo" alt="logo" />
          < SignIn />
          < Footer />

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </header>
        < ViewVideo />
        < Welcome />
        < PhotoGallery />

      </div>
    );
  }
}

export default App;
