// PhotoDetails.js

import React from "react";
import Like from "../like/like";
import {
  HandleCommentIcon,
  HandleGetComment,
  HandleWriteComment,
} from "../comment/comment";
import { HandleIsLiked, HandleLikeNumber } from "./like_handler";

const PhotoDetails = ({
  photo,
  token,
  likeNumbers,
  setLikeNumbers,
  commentToggle,
  onCommentToggle,
}) => {
  return (
    <div className="w-[500px] mx-auto">
      <div className="flex">
        <Like
          token={token}
          photoId={photo.id}
          onLikeNumber={(likeNumber) => {
            HandleLikeNumber(photo.id, likeNumber, setLikeNumbers);
          }}
          isLiked={() => HandleIsLiked(photo.id, token)}
        />
        <HandleCommentIcon />
      </div>
      <div>
        <p className="mt-1 text-sm2 leading-sm2 font-semibold">
          {likeNumbers[photo.id]} likes
        </p>
      </div>
      <p className="mt-2 text-sm2 leading-sm2 mb-1 font-normal">
        <span className="font-semibold">{photo.user.username}</span>{" "}
        {photo.caption}
      </p>
      <HandleGetComment
        token={token}
        photoId={photo.id}
        commentToggle={commentToggle}
      />
      <HandleWriteComment
        token={token}
        photoId={photo.id}
        onCommentToggle={onCommentToggle}
      />
    </div>
  );
};

export default PhotoDetails;
