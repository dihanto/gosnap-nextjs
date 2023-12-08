import { getServerSession } from "next-auth";
import Profile from "../components/profile/profile";
import { authOptions } from "../components/auth/auth";

export default async function Page() {
  const session = await getServerSession(authOptions);
  return <Profile token={session.token} />;
}
