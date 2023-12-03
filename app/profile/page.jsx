import { token } from "../components/endpoint/endpoint";
import Profile from "../components/profile/profile";

export default function Page() {
  return <Profile token={token} />;
}
