"use client";
import React, { useEffect, useState } from "react";
import LikeButton from "./like_button";
import { HandleIsLiked, LikeHandler, UnlikeHandler } from "./like_handler";
import HandleCommentIcon from "../comment/comment_icon";

const LikeFunctionality = ({ token, photoId, likeNumbers }) => {
  console.log("photo detail" + likeNumbers);

  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(likeNumbers);
  const [initialStatusFetched, setInitialStatusFetched] = useState(false);

  useEffect(() => {
    if (!initialStatusFetched) {
      HandleIsLiked(photoId, token)
        .then((initialLikeStatus) => {
          setLike(initialLikeStatus);
          setInitialStatusFetched(true);
        })
        .catch((error) => {
          console.error("Error fetching initial like status:", error);
        });
    }
  }, [photoId, initialStatusFetched, token]);

  const handleClick = () => {
    if (!like) {
      const res = LikeHandler(token, photoId);
      setLikeCount((prevLikeNumbers) => ({
        ...prevLikeNumbers,
        [photoId]: res,
      }));
    } else {
      const res = UnlikeHandler(token, photoId);
      setLikeCount((prevLikeNumbers) => ({
        ...prevLikeNumbers,
        [photoId]: res,
      }));
    }

    setLike(!like);
  };
  return (
    <div className="mt-[11.5px] -ml-[2px] mb-4">
      <div className=" flex">
        <LikeButton onClick={handleClick} isLiked={like} />
        <HandleCommentIcon />
      </div>
      <p className="mt-1 text-sm2 leading-sm2 font-semibold absolute ml-1">
        {likeCount[photoId] ? likeCount[photoId] : likeNumbers} likes
      </p>
    </div>
  );
};

export default LikeFunctionality;
