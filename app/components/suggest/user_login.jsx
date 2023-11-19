import Image from "next/image";
import { host } from "../endpoint/endpoint";
import images from "../assets/asset";

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
        <Image
          src={
            user.data.profilePicture !== "empty"
              ? user.data.profilePicture
              : images.profilePicture
          }
          alt="profilePicture"
          width={36}
          height={36}
          className="w-9 h-9 rounded-full object-cover"
        />
      </div>
      <div>
        <p className="-mb-[4px] font-semibold">{user.data.username}</p>
        <p className="text-slate-500">{user.data.name}</p>
      </div>
    </div>
  );
}
