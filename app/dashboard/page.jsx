import Content from "../components/content/content";
import Navbar from "../components/navbar/navbar";
import Suggest from "../components/suggest/suggest";
import GetUserLogin from "../components/suggest/user_login";

export default function Page() {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDA0NjkyNjcsImlkIjoiMWU2YTc1MjgtNTY3Zi00MmMzLWFkZWItNWIxMjVmYTEyNWIyIiwibGV2ZWwiOiJ1c2VyIiwidXNlcm5hbWUiOiJzZmFrc2RqZmxrc2pmYXNkIn0._nqykmi8bRVOMl8KqsVZ5SMv6De7fV-o1UMBhW9Gzh0";

  return (
    <div className="flex relative">
      <Navbar />
      <div className="w-1/5 max-w-[250px]"></div>
      <Content token={token} />
      <Suggest token={token} />
    </div>
  );
}
