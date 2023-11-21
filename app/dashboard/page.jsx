import Content from "../components/content/content";
import Navbar from "../components/navbar/navbar";
import Suggest from "../components/suggest/suggest";

export default function Page() {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDA1NDE0MDksImlkIjoiODM1YjhkMWYtNDQzYy00MzUwLWI5MzQtNmMyMzNlY2VlOTVmIiwibGV2ZWwiOiJ1c2VyIiwidXNlcm5hbWUiOiJkaWhhbnRvMjMifQ.AKD6Tc336W4HAhehcbWns1j1XP6zC3iLSwe4v7042Fs";

  return (
    <div className="flex relative">
      <Navbar />
      <div className="w-1/5 max-w-[250px]"></div>
      <Content token={token} />
      <Suggest token={token} />
    </div>
  );
}
