import { host } from "../endpoint/endpoint";
import UserLogin from "./user_login";
import ListUser from "./user_list";

export default async function Suggest({ token }) {
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(host.UserEndpoint.getAllUser(), requestOptions);
  const responseJson = await response.json();
  const users = responseJson.data;

  return (
    <div>
      <UserLogin token={token} />
      <ListUser users={users} />
    </div>
  );
}
