import UserLogin from "../../components/suggest/user_login";
import ListUser from "../../components/suggest/user_list";
import { token } from "../../components/endpoint/endpoint";

export default function Suggest() {
  const tokenjwt = token;
  return (
    <div className=" w-1/5 max-w-sm text-sm min-h-screen">
      <UserLogin token={tokenjwt} />
      <ListUser token={tokenjwt} />
    </div>
  );
}
