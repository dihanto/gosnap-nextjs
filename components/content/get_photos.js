import { FetchApi } from "../libs/api-libs";

export const GetPhotos = async (token, page) => {
  const response = await FetchApi(
    process.env.NEXT_PUBLIC_API_URL + `/photos?page=${page}`,
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
