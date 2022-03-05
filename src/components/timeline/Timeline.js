import React from 'react';
import TweetBox from './TweetBox';
import './Timeline.css';
import Post from './Post';

function Timeline() {
  return (
    <div className="timeline">
      {/* Header */}
    <div className="timeline__header">
      <h2>Home</h2>
    </div>
      {/* TweetBox */}
      <TweetBox />
      {/* Post */}
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default Timeline
