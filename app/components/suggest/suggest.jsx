import UserLogin from "./user_login";
import ListUser from "./user_list";

export default function Suggest({ token }) {
  return (
    <div className=" w-1/5 max-w-sm text-sm min-h-screen">
      <UserLogin token={token} />
      <ListUser token={token} />
    </div>
  );
}
