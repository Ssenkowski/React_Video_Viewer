import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome'
import SignIn from './components/SignIn'
import ViewVideo from './components/ViewVideo'
import PhotoGallery from './components/PhotoGallery'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import * as Previous from './components/PhotoGallery/Previous'
import * as Next from './components/PhotoGallery/Next'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const photos = [
{
  id: 1,
  name: "Pioneer School",
  url: "https://imgur.com/a/EuRnEyx"
},
{
  id: 2,
  name: "Steven's bff",
  url: "https://imgur.com/1AI4TD2"
},
{
    id: 3,
  name: "Love your ring!",
  url: "https://imgur.com/21EjcNc"
},
{
    id: 4,
  name: "Family fun",
  url: "https://imgur.com/Y9pIKeG"
},
{
    id: 5,

  name: "The glance",
  url: "https://imgur.com/vWTS4Ly"
},
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />

          < Welcome />
          <img src={logo} className="App-logo" alt="logo" />
          < SignIn />
          < Footer />

        </header>
        < ViewVideo />
        < PhotoGallery photos={photos}/>

      </div>
    );
  }
}

export default App;
