import Image from "next/image";
import { host } from "../endpoint/endpoint";
import { UserCircle } from "@phosphor-icons/react/dist/ssr";

export default async function UserLogin({ token }) {
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(
    host.UserEndpoint.getUserLogin(),
    requestOptions
  );
  const user = await response.json();

  return (
    <div className="flex mt-5">
      <div className="mr-2">
        {user.profilePicture !== "empty" ? (
          <Image
            width={36}
            height={36}
            src={user.data.profilePicture}
            alt="profile"
            className="w-8 h-8 object-cover rounded-full mr-2"
          />
        ) : (
          <UserCircle size={38} />
        )}
      </div>
      <div>
        <p className="-mb-[4px] font-semibold">{user.data.username}</p>
        <p className="text-slate-500">{user.data.name}</p>
      </div>
    </div>
  );
}
