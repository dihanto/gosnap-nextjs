import { FetchApi } from "../libs/api-libs";

const GetFollowing = async (token) => {
  const response = await FetchApi(
    process.env.NEXT_PUBLIC_API_URL + "/follows/following",
    token,
    "GET"
  );

  return response.data;
};

export default GetFollowing;
