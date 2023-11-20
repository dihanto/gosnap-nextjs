import UserLogin from "./user_login";
import ListUser from "./user_list";

export default function Suggest({ token }) {
  return (
    <div>
      <UserLogin token={token} />
      <ListUser token={token} />
    </div>
  );
}
