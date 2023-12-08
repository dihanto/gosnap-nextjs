import { FetchApi, FetchPhotos } from "../libs/api-libs";
import { host } from "../endpoint/endpoint";

export const GetPhotos = async (
  page,
  token,
  setPhotos,
  setLikeNumbers,
  setPage,
  setIsFetching,
  setIsLoading
) => {
  setIsFetching(true);
  try {
    const response = await FetchApi(
      `${host.photoEndpoint.getPhoto()}?page=${page}`,
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
    setPhotos((prevPhotos) => [...prevPhotos, ...response.data]);
    setLikeNumbers((prevLikeNumbers) => ({
      ...prevLikeNumbers,
      ...initialLikeNumbers,
    }));
    setPage((prev) => prev + 1);
  } catch (error) {
    console.error("Error fetching photos:", error);
  } finally {
    setIsFetching(false);
    setIsLoading(false);
  }
};
