import React from "react";
import PostPhoto from "../components/post/post";
import { getServerSession } from "next-auth";
import { authOptions } from "../components/auth/auth";

export default async function Page() {
  const session = await getServerSession(authOptions);
  return <PostPhoto token={session.token} />;
}
