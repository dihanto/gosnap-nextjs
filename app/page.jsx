"use client";
import { getServerSession } from "next-auth";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { authOptions } from "./components/auth/auth";

export default function Page() {
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
