import { FetchApi } from "../libs/api-libs";

const GetFollower = async (token) => {
  const follower = await FetchApi(
    process.env.NEXT_PUBLIC_API_URL + "/follows/follower",
    token,
    "GET"
  );
  return follower.data.followerCount;
};
export default GetFollower;
