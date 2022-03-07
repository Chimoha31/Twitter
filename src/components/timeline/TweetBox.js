import React, { useState } from "react";
import { Avatar, Button } from "@mui/material";
import "./TweetBox.css";
import { collection, addDoc } from "firebase/firestore";
import db from "../../firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const tweetMsgHandler = (e) => {
    setTweetMessage(e.target.value);
  };

  const tweetImgHandler = (e) => {
    setTweetImage(e.target.value);
  };

  const sendTweet = (e) => {
    e.preventDefault();
    // firebaseにdataを送る＝tweet内容を送る
    addDoc(collection(db, "posts"), {
      displayName:"Studing of Chiho",
      userName:"Chiho_Teddy",
      verified:true,
      text: tweetMessage,
      avatar:"http://shincode.info/wp-content/uploads/2021/12/icon.png",
      image: tweetImage,
    });
    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar />
          <input
            placeholder="What you doing now?"
            type="text"
            
            onChange={tweetMsgHandler}
          />
        </div>
        <input
          className="tweetBox__imageInput"
          placeholder="Add image URL"
          type="text"
         
          onChange={tweetImgHandler}
        />
        <Button
          className="tweetBox__tweetButton"
          type="submit"
          onClick={sendTweet}
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
