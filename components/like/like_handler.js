import { FetchApi } from "../libs/api-libs";

export const LikeHandler = async (token, photoId) => {
  const response = await FetchApi(
    process.env.NEXT_PUBLIC_API_URL + `/photos/${photoId}/likes`,
    token,
    "POST"
  );
  if (response.status === 200) {
    return Number(response.data.likeCount);
  } else {
    console.log("failed to send like : ", response.message);
  }
};

export const UnlikeHandler = async (token, photoId) => {
  const response = await FetchApi(
    process.env.NEXT_PUBLIC_API_URL + `/photos/${photoId}/unlikes`,
    token,
    "DELETE"
  );
  if (response.status === 200) {
    return Number(response.data.likeCount);
  } else {
    console.log("failed to unlike :", response.message);
  }
};

export const HandleIsLiked = async (photoId, token) => {
  const response = await FetchApi(
    process.env.NEXT_PUBLIC_API_URL + `/photos/${photoId}/likes`,
    token,
    "GET"
  );
  if (response.status === 200) {
    return response.data;
  } else {
    console.log("Failed to get like data:", response.message);
  }
};
