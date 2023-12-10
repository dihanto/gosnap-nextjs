import dynamic from "next/dynamic";

const Content = dynamic(() => import("./base"), { ssr: true });
export default function Page() {
  return (
    <>
      <Content />
    </>
  );
}
