"use client";
import { useSession } from "next-auth/react";
import Content from "../components/content/content";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const { data: session, status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status !== "authenticated") {
      router.push("/register");
    }
  }, [router, session, status]);
  const token = session?.token;
  return (
    <div>
      <Content token={token} />
    </div>
  );
}
