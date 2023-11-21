import Content from "../components/content/content";
import Navbar from "../components/navbar/navbar";
import Suggest from "../components/suggest/suggest";

export default function Page() {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDA2Mjc4NTEsImlkIjoiODM1YjhkMWYtNDQzYy00MzUwLWI5MzQtNmMyMzNlY2VlOTVmIiwibGV2ZWwiOiJ1c2VyIiwidXNlcm5hbWUiOiJkaWhhbnRvMjMifQ.V8Xhte6G3hwDRkn2FNMRSlerSi7_3eR8GIH9PH3d2l0";

  return (
    <div className="flex relative">
      <Navbar />
      <div className="w-1/5 max-w-[250px]"></div>
      <Content token={token} />
      <Suggest token={token} />
    </div>
  );
}
