import React from 'react';
import TweetBox from './TweetBox';
import './Timeline.css';

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
    </div>
  )
}

export default Timeline
