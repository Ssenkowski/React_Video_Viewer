import React, { Component } from 'react';
import VideoPlayer from 'react-simple-video-player';
 
const ViewVideo = () => (
  <VideoPlayer
    url="https://youtu.be/20dKBgFjC9k"
    poster=""
    width={900}
    height={600}
  />
);

export default ViewVideo;