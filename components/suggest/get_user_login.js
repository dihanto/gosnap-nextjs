import { FetchApi } from "../libs/api-libs";

const GetUserLogin = async (token) => {
  const user = await FetchApi(
    process.env.NEXT_PUBLIC_API_URL + "/users",
    token,
    "GET"
  );
  return user.data;
};

export default GetUserLogin;
