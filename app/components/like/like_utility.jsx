import React, { useEffect, useState } from "react";
import { host } from "../endpoint/endpoint";
import LikeButton from "./like_button";
import { FetchApi } from "../libs/api-libs";

const LikeFunctionality = ({ token, photoId, onLikeNumber, isLiked }) => {
  const [like, setLike] = useState(false);
  const [initialStatusFetched, setInitialStatusFetched] = useState(false);

  useEffect(() => {
    if (!initialStatusFetched) {
      isLiked(photoId)
        .then((initialLikeStatus) => {
          setLike(initialLikeStatus);
          setInitialStatusFetched(true);
        })
        .catch((error) => {
          console.error("Error fetching initial like status:", error);
        });
    }
  }, [photoId, initialStatusFetched, isLiked]);

  const handleLike = async () => {
    const response = await FetchApi(
      host.likeEndpoint.like(photoId),
      token,
      "POST"
    );
    if (response.status === 200) {
      onLikeNumber(Number(response.data.likeCount), photoId);
    } else {
      console.log("failed to send like : ", response.message);
    }
  };

  const handleUnlike = async () => {
    const response = await FetchApi(
      host.likeEndpoint.unlike(photoId),
      token,
      "DELETE"
    );
    if (response.status === 200) {
      onLikeNumber(Number(response.data.likeCount), photoId);
    } else {
      console.log("failed to unlike :", response.message);
    }
  };

  const handleClick = () => {
    if (!like) {
      handleLike();
    } else {
      handleUnlike();
    }

    setLike(!like);
  };

  return (
    <div className="mt-[10px] -ml-[2px]">
      <LikeButton onClick={handleClick} isLiked={like} />
    </div>
  );
};

export default LikeFunctionality;
