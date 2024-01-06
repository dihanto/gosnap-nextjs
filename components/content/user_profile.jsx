"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { UserCircle } from "@phosphor-icons/react/dist/ssr";
import { FetchApi, FetchApiWithBody } from "../libs/api-libs";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import EditPhoto from "../option/edit_photo";
import PhotoOptions from "./photo_option";

const UserProfile = ({ user, modal, photoId, onUpdate }) => {
  const { data: session } = useSession();
  const [isOwn, setIsOwn] = useState(false);
  useEffect(() => {
    if (user.username === session.user) {
      setIsOwn(true);
    } else {
      setIsOwn(false);
    }
  }, [session.user, user.username]);
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
      {isOwn && (
        <PhotoOptions photoId={photoId} modal={modal} onUpdate={onUpdate} />
      )}
    </div>
  );
};

export default UserProfile;
