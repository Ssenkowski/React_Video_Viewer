import React, { Component } from 'react';
import VideoPlayer from 'react-simple-video-player';
 
const Videos = () => (
  <VideoPlayer
    url="http://youtu.be/20dKBgFjC9k"
    poster=""
    width={600}
    height={400}
  />
);

export default Videos;