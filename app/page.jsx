"use client";
import { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";

export default function Page() {
  const { data: session } = useSession();

  useEffect(() => {
    console.log(session);
  }, [session]);

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
