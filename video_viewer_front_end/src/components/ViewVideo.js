import React, { Component } from 'react';
import VideoPlayer from 'react-simple-video-player';
 
const ViewVideo = () => (
  <VideoPlayer
    url="http://youtu.be/20dKBgFjC9k"
    poster=""
    width={600}
    height={400}
  />
);

export default ViewVideo;