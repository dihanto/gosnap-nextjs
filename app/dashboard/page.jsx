"use client";
import { useSession } from "next-auth/react";
import Content from "../components/content/content";
import Navbar from "../components/navbar/navbar";
import Suggest from "../components/suggest/suggest";
import { useRouter } from "next/navigation";

export default function Page() {
  const { data: session } = useSession();
  const router = useRouter();
  if (!session) {
    router.push("/");
    return null;
  }
  const token = session.token;
  return (
    <div className="flex relative">
      <Navbar />
      <div className="w-1/5 max-w-[250px]"></div>
      <Content token={token} />
      <Suggest token={token} />
    </div>
  );
}
