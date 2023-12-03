import Content from "../components/content/content";
import { token } from "../components/endpoint/endpoint";
import Navbar from "../components/navbar/navbar";
import Suggest from "../components/suggest/suggest";

export default async function Page() {
  return (
    <div className="flex relative">
      <Navbar />
      <div className="w-1/5 max-w-[250px]"></div>
      <Content token={token} />
      <Suggest token={token} />
    </div>
  );
}
