import React from "react";
import Image from "next/image";
import images from "../assets/asset";

const UserProfile = ({ user }) => {
  return (
    <div className="w-[500px] h-[37px] mx-auto items-center flex">
      <Image
        width={32}
        height={32}
        src={
          user.profilePicture !== "empty"
            ? user.profilePicture
            : images.profilePicture
        }
        alt="profile"
        className="w-8 h-8 object-cover rounded-full mr-2"
      />
      <p className="font-semibold">{user.username}</p>
    </div>
  );
};

export default UserProfile;
