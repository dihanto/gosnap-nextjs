import { getServerSession } from "next-auth";
import Content from "../components/content/content";
import { authOptions } from "../components/auth/auth";

export default async function Page() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <Content token={session.token} />
    </div>
  );
}
