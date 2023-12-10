import { host } from "../endpoint/endpoint";
import { FetchApi } from "../libs/api-libs";

export default async function GetAllUser(token) {
  const response = await FetchApi(host.UserEndpoint.getAllUser(), token, "GET");
  return response.data;
}
