import UserLogin from "../../../components/suggest/user_login";
import ListUser from "../../../components/suggest/user_list";
import { getServerSession } from "next-auth";
import { authOptions } from "@/components/auth/auth";

export default async function Suggest() {
  const session = await getServerSession(authOptions);

  return (
    <div className=" w-1/5 max-w-sm text-sm min-h-screen">
      <UserLogin token={session.token} />
      <ListUser token={session.token} />
    </div>
  );
}
