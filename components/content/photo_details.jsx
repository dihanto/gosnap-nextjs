import React from "react";
import LikeFunctionality from "../like/like_utility";
import { RenderComment } from "../comment/comment";

const PhotoDetails = ({ photo, token, likeNumbers, likeFromModal, modal }) => {
  return (
    <div className="w-[500px] mx-auto">
      <div className="flex">
        <LikeFunctionality
          token={token}
          photoId={photo.id}
          likeNumbers={likeNumbers}
          likeFromModal={likeFromModal}
        />
      </div>
      <p className="mt-2 text-sm2 leading-sm2 mb-1 font-normal">
        <span className="font-semibold">{photo.user.username}</span>{" "}
        {photo.caption}
      </p>
      {modal ? null : <RenderComment token={token} photoId={photo.id} />}
    </div>
  );
};

export default PhotoDetails;
