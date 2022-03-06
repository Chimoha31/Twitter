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
      <Post displayName='Studying of Chiho' userName="chiho_Teddy"
      varified={true}
      text="This is my first Tweet"
      avatar="http://shincode.info/wp-content/uploads/2021/12/icon.png"
      image="https://source.unsplash.com/random" />
    </div>
  )
}

export default Timeline
