import { host } from "../endpoint/endpoint";
import { FetchApi } from "../libs/api-libs";

const GetUserLogin = async (token) => {
  const user = await FetchApi(host.UserEndpoint.getUserLogin(), token, "GET");
  return user.data;
};

export default GetUserLogin;
