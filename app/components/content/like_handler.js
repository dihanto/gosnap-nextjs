import { FetchPhotos } from "../libs/api-libs";
import { host } from "../endpoint/endpoint";

export const HandleIsLiked = async (photoId, token) => {
  const response = await FetchPhotos(
    host.photoEndpoint.likePhoto(photoId),
    token
  );
  if (response.status === 200) {
    return response.data;
  } else {
    console.log("Failed to get like data:", response.message);
  }
};

export const HandleLikeNumber = (photoId, likeNumber, setLikeNumbers) => {
  setLikeNumbers((prevLikeNumbers) => ({
    ...prevLikeNumbers,
    [photoId]: likeNumber,
  }));
};
