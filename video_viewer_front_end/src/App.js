import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome'
import SignIn from './components/SignIn'
import VideoPlayer from './components/VideoPlayer'
import Photos from './components/Photos'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import * as Previous from './components/PhotoGallery/Previous'
import * as Next from './components/PhotoGallery/Next'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const photos = [
{
  id: 1,
  name: "Pioneer School",
  src: "https://i.imgur.com/o9bEaOJ.jpg",
  width: 4,
  height: 3
},
{
  id: 2,
  name: "Steven's bff",
  src: "https://i.imgur.com/1AI4TD2.jpg",
  width: 4,
  height: 3
},
{
    id: 3,
  name: "Love your ring!",
  src: "https://i.imgur.com/21EjcNc.jpg",
  width: 4,
  height: 3
},
{
    id: 4,
  name: "Family fun",
  src: "https://i.imgur.com/Y9pIKeG.jpg",
  width: 4,
  height: 3
},
{
    id: 5,

  name: "The glance",
  src: "https://i.imgur.com/vWTS4Ly.jpg",
  width: 4,
  height: 3
}
]

function handleClick(e){
  e.preventDefault();
 console.log('The button was clicked')
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          /*Render the Navbar here*/ 
          <img src={logo} className="App-logo" alt="logo" />
          < SignIn onClick={handleClick}/>
          <div className="content">
            /*Render the photos,about page or videos here*/ 
          </div>
          < Footer />
        </header>
      </div>
    );
  }
}

export default App;
