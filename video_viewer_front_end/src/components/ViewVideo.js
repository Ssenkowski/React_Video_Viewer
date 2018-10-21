import React, { Component } from 'react';
import VideoPlayer from 'react-simple-video-player';
 
const ViewVideo = () => (
  <VideoPlayer
    url="https://youtu.be/20dKBgFjC9k"
    poster=""
    width={1200}
    height={900}
    autoplay
  />
);

export default ViewVideo;