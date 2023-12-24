import GetUserLogin from "../suggest/get_user_login";
import GetUserPhoto from "./user_photo";
import GetFollower from "../follow/follower";
import Navbar from "../../app/feed/@navbar/page";
import Image from "next/image";
import { UserCircle } from "@phosphor-icons/react/dist/ssr";
import GetFollowing from "../follow/following";
import Link from "next/link";

export default async function Profile({ token }) {
  const user = await GetUserLogin(token);
  const photos = await GetUserPhoto(token, user.username);
  const follower = await GetFollower(token);
  const following = await GetFollowing(token);

  return (
    <div>
      <Navbar onToken={token} />
      <div className="bg-slate-50 p-4 h-screen flex">
        <div className="w-1/5"></div>
        <div className="w-4/5 px-20">
          <div className="flex mt-5 ml-16 text-sm">
            <div className="mr-5 w-[150px] h-[150px] ring-2 ring-slate-600 rounded-full flex justify-center items-center">
              <div className="ring-1 ring-slate-400 rounded-full">
                {user.profilePicture !== "empty" ? (
                  <Image
                    src={user.profilePicture}
                    alt="Profile"
                    className="w-36 h-36 rounded-full object-cover"
                    width={50}
                    height={50}
                  />
                ) : (
                  <UserCircle size={148} />
                )}
              </div>
            </div>
            <div>
              <div className="flex">
                <p className=" font-semibold text-base pr-2">{user.username}</p>
                <Link
                  href="/profile/update"
                  className="bg-slate-200 hover:bg-slate-300 rounded-lg py-1 px-2"
                >
                  Edit Profile
                </Link>
              </div>
              <div>
                <p className="text-gray-600">Bio</p>
              </div>
              <div className="flex mt-3">
                <p className="mr-7">
                  <span className="font-semibold">{photos.length}</span> posts
                </p>
                <p className="mr-7">
                  <span className="font-semibold">{follower}</span> followers
                </p>
                <p className="mr-7">
                  <span className="font-semibold">
                    {following.followingCount}
                  </span>{" "}
                  following
                </p>
              </div>
            </div>
          </div>
          <div className="border border-slate-300 mt-10"></div>
          <div className="grid grid-cols-3 gap-1 mt-1">
            {photos.map((photo) => (
              <div key={photo.id} className="relative aspect-square">
                <Image
                  src={photo.photoBase64}
                  alt={photo.title}
                  className="object-cover w-full h-full rounded-sm"
                  width={50}
                  height={50}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
