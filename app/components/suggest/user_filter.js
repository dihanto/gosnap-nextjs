import { host } from "../endpoint/endpoint";
import { FetchApi } from "../libs/api-libs";

export const UserFilter = async (users, token) => {
  const response = await FetchApi(
    host.followEndpoint.getFollowing(),
    token,
    "GET"
  );
  const followings = response.data?.username;

  const filteredUsers = users.filter((user) => {
    if (followings) {
      return !followings.includes(user.username);
    } else {
      return users;
    }
  });
  return filteredUsers;
};
