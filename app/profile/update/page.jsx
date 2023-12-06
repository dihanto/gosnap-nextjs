import { token } from "@/app/components/endpoint/endpoint";
import UpdateProfile from "@/app/components/profile/update-profile";

export default function Page() {
  return <UpdateProfile token={token} />;
}
