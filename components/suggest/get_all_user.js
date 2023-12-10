import { FetchApi } from "../libs/api-libs";

export default async function GetAllUser(token) {
  const response = await FetchApi(
    process.env.NEXT_PUBLIC_API_URL + "/users/all",
    token,
    "GET"
  );
  return response.data;
}
