import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import "./Timeline.css";
import Post from "./Post";
import db from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

function Timeline() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const postData = collection(db, "posts");
    getDocs(postData).then((snapShot) => {
      setPosts(snapShot.docs.map((doc) => doc.data()));
    });
    console.log('mount');
  }, []);

  return (
    <div className="timeline">
      {/* Header */}
      <div className="timeline__header">
        <h2>Home</h2>
      </div>
      {/* TweetBox */}
      <TweetBox />
      {/* Post */}
      {posts.map((post, index) => (
        <Post
          key={index}
          displayName={post.displayName}
          userName={post.username}
          verified={post.verified}
          text={post.test}
          avatar={post.avatar}
          image={post.image}
        />
      ))}
    </div>
  );
}

export default Timeline;
