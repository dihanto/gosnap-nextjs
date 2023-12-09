import React from "react";
import HandleGetComment from "../comment/get_comment";
import HandleWriteComment from "../comment/write_comment";
import LikeFunctionality from "../like/like_utility";

const PhotoDetails = ({ photo, token, likeNumbers }) => {
  return (
    <div className="w-[500px] mx-auto">
      <div className="flex">
        <LikeFunctionality
          token={token}
          photoId={photo.id}
          likeNumbers={likeNumbers}
        />
      </div>
      <p className="mt-2 text-sm2 leading-sm2 mb-1 font-normal">
        <span className="font-semibold">{photo.user.username}</span>{" "}
        {photo.caption}
      </p>
      {/* <HandleGetComment
        token={token}
        photoId={photo.id}
        commentToggle={commentToggle}
      />
      <HandleWriteComment
        token={token}
        photoId={photo.id}
        onCommentToggle={onCommentToggle}
      /> */}
    </div>
  );
};

export default PhotoDetails;
