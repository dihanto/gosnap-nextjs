import { host } from "../endpoint/endpoint";
import { FetchApi } from "../libs/api-libs";

const GetUserPhoto = async (token, username) => {
  const photos = await FetchApi(host.photoEndpoint.getPhoto(), token, "GET");
  const filteredPhotos = photos.data.filter(
    (photo) => photo.user.username === username
  );
  return filteredPhotos;
};

export default GetUserPhoto;
