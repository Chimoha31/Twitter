import React from 'react';
import "./Post.css";
import { ChatBubbleOutline, FavoriteBorder, PublishOutlined, Repeat, VerifiedUser } from '@mui/icons-material';
import { Avatar } from '@mui/material';

function Post() {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar />
      </div>

      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>Chiho Maekawa
            <span className="post__headerSpecial">
              <VerifiedUser className="post--badge" />
              @Chiho_Teddyyys
            </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>React なう</p>
          </div>
        </div>

        <img src="https://source.unsplash.com/random" alt="" />

        <div className="post__footer">
          <ChatBubbleOutline fontSize="small" />
          <Repeat fontSize="small" />
          <FavoriteBorder fontSize="small" />
          <PublishOutlined fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
