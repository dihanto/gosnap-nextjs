import { host } from "../endpoint/endpoint";
import { FetchApi } from "../libs/api-libs";

const GetFollowing = async (token) => {
  const response = await FetchApi(
    host.followEndpoint.getFollowing(),
    token,
    "GET"
  );

  return response.data;
};

export default GetFollowing;
