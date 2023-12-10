import { authOptions } from "@/components/auth/auth";
import UpdateProfile from "@/components/profile/update-profile";
import { getServerSession } from "next-auth";

export default async function Page() {
  const session = await getServerSession(authOptions);
  return <UpdateProfile token={session.token} />;
}
