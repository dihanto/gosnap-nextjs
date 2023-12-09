import { FetchApi } from "../libs/api-libs";
import { host } from "../endpoint/endpoint";

export const GetPhotos = async (token) => {
  const response = await FetchApi(
    `${host.photoEndpoint.getPhoto()}?page=${2}`,
    token,
    "GET"
  );
  if (response.data === null) {
    return;
  }
  const initialLikeNumbers = response.data.reduce((likeNumbers, photo) => {
    likeNumbers[photo.id] = photo.like.likeCount;
    return likeNumbers;
  }, {});
  const data = {
    photos: response.data,
    likeNumbers: initialLikeNumbers,
  };
  return data;
};
