import React from "react";
import { Search } from "@mui/icons-material";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets__searchIcon" />
        <input type="text" placeholder="Words Search" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>Wha you doing now?</h2>
        {/* ライブラリを追加 */}
        <TwitterTweetEmbed tweetId={"987013224703737856"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="rihanna" //@usename
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://twitter.com/rihanna"}
          options={{ text: "#React.js is awesome", via: "chimoha31" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
