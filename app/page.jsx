import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>test</h1>
        <Link href="dashboard">dashboard</Link>
      </div>
    </main>
  );
}
