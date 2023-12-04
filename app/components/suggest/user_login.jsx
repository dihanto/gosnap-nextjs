import Image from "next/image";
import { UserCircle } from "@phosphor-icons/react/dist/ssr";
import GetUserLogin from "./get_user_login";
import Link from "next/link";

export default async function UserLogin({ token }) {
  const user = await GetUserLogin(token);
  if (!user) {
    return;
  }
  return (
    <div className="flex mt-5">
      <div className="mr-2">
        {user.profilePicture !== "empty" ? (
          <Image
            width={36}
            height={36}
            src={user.profilePicture}
            alt="profile"
            className="w-8 h-8 object-cover rounded-full mr-2"
          />
        ) : (
          <UserCircle size={38} />
        )}
      </div>
      <div>
        <Link href="/profile" className="-mb-[4px] font-semibold">
          {user.username}
        </Link>
        <p className="text-slate-500">{user.name}</p>
      </div>
    </div>
  );
}
