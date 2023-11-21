import React from "react";
import Image from "next/image";
import { UserCircle } from "@phosphor-icons/react/dist/ssr";

const UserProfile = ({ user }) => {
  return (
    <div className="w-[500px] h-[37px] mx-auto items-center flex">
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

      <p className="font-semibold">{user.username}</p>
    </div>
  );
};

export default UserProfile;
