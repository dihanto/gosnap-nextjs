"use client";
import { useSession } from "next-auth/react";
import Content from "../components/content/content";
import Navbar from "../components/navbar/navbar";
import Suggest from "../components/suggest/suggest";

export default function Page() {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDE1NDM3NDIsImlkIjoiMGI0ODE1MmYtODY3ZC00MjBmLTkzNGEtZjU4MTkwNTRhOTZhIiwibGV2ZWwiOiJ1c2VyIiwidXNlcm5hbWUiOiJqb2hubGVub24ifQ.4RQmmTVYJ0zy4eH2RVQdUa04MTLvefoea9gi0FF2QLc";

  return (
    <div className="flex relative">
      <Navbar />
      <div className="w-1/5 max-w-[250px]"></div>
      <Content token={token} />
      <Suggest token={token} />
    </div>
  );
}
