import { FetchApi } from "../libs/api-libs";

const GetUserPhoto = async (token, username) => {
  const photos = await FetchApi(
    process.env.NEXT_PUBLIC_API_URL + "/photos",
    token,
    "GET"
  );
  const filteredPhotos = photos.data.filter(
    (photo) => photo.user.username === username
  );
  return filteredPhotos;
};

export default GetUserPhoto;
