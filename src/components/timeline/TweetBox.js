import React from "react";
import { Avatar, Button } from "@mui/material";
import "./TweetBox.css";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar />
          <input placeholder="What you doing now?" type="text" />
        </div>
        <input
          className="tweetBox__imageInput"
          placeholder="Add image URL"
          type="text"
        />
        <Button className="tweetBox__tweetButton" type="submit">
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
