import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome'
import SignIn from './components/SignIn'
import VideoPlayer from './components/VideoPlayer'
import DisplayPhotos from './components/DisplayPhotos'
import NavBar from './components/Navbar/NavBar'
import Footer from './components/Footer'
import PhotosService from './services/PhotosService';
import * as Previous from './components/PhotoGallery/Previous'
import * as Next from './components/PhotoGallery/Next'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Photos from './components/PhotoGallery';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchPhotos } from './actions/photosActions'


function handleClick(e){
  e.preventDefault();
 console.log('The button was clicked')
}

class App extends Component {
  constructor() {
    super()

    this.state = {
      photos: []
    }
  }

  componentDidMount() {
    // PhotosService.fetchPhotos().then(photos => this.setState({ photos }))
    this.props.fetchPhotos()
  }

  render() {
    let { photos } = this.props 
    debugger
    return (
      <div className="App">
        <header className="App-header">
          < NavBar />
          <div className="content">
            < VideoPlayer />
            < DisplayPhotos photos={photos} />
          </div>
          < SignIn onClick={handleClick}/>
          < Footer />
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    photos: state.photos.all
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPhotos
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);
