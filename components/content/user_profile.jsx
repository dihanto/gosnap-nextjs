import React from "react";
import Image from "next/image";
import { UserCircle } from "@phosphor-icons/react/dist/ssr";

const UserProfile = ({ user, modal }) => {
  return (
    <div className="flex justify-between w-[500px] h-[37px]">
      <div className=" items-center flex">
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
      {modal ? <div className="mr-1">...</div> : null}
    </div>
  );
};

export default UserProfile;
