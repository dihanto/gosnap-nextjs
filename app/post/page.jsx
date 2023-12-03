import React from "react";
import PostPhoto from "../components/post/post";
import { token } from "../components/endpoint/endpoint";

export default function Page() {
  return <PostPhoto token={token} />;
}
