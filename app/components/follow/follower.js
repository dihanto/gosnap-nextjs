import { host } from "../endpoint/endpoint";
import { FetchApi } from "../libs/api-libs";

const GetFollower = async (token) => {
  const follower = await FetchApi(
    host.followEndpoint.getFollower(),
    token,
    "GET"
  );
  return follower.data.followerCount;
};
export default GetFollower;
