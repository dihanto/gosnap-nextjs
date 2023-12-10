import { FetchApi } from "../libs/api-libs";

export const UserFilter = async (users, token) => {
  const response = await FetchApi(
    process.env.NEXT_PUBLIC_API_URL + "/follows/following",
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
