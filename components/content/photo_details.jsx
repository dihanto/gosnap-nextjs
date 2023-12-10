import React from "react";
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
      <HandleWriteComment token={token} photoId={photo.id} />
    </div>
  );
};

export default PhotoDetails;
