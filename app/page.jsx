"use client";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const { data: session, status } = useSession();
  if (status !== "authenticated") {
    router.push("/register");
  } else {
    router.push("/dashboard");
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>test</h1>
        <button onClick={() => signIn()}>Sign in</button>
        <Link href="dashboard">dashboard</Link>
      </div>
    </main>
  );
}
