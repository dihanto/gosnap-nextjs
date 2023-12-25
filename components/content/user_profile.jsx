"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { UserCircle } from "@phosphor-icons/react/dist/ssr";

const UserProfile = ({ user, modal }) => {
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const deleteEditButtonRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (
      deleteEditButtonRef.current &&
      !deleteEditButtonRef.current.contains(event.target) &&
      event.target.tagName !== "BUTTON"
    ) {
      setShowDeleteButton(false);
    }
  };

  const handleOption = () => {
    setShowDeleteButton(!showDeleteButton);
  };

  const handleDelete = () => {
    console.log("Deleting user...");
  };

  const handleEdit = () => {
    console.log("Editing user...");
  };

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
      <div>
        {modal && (
          <button
            className="transition duration-300 ease-in-out transform hover:scale-110 mr-1"
            onClick={handleOption}
          >
            ...
          </button>
        )}
        {showDeleteButton && (
          <div
            ref={deleteEditButtonRef}
            className="absolute right-2 w-[74px] h-20 bg-white rounded-lg shadow-xl text-sm"
          >
            <button
              className="transition duration-200 ease-in-out transform hover:scale-105 pl-3 my-2"
              onClick={handleDelete}
            >
              Delete
            </button>
            <br />
            <button
              className="transition duration-200 ease-in-out transform hover:scale-105 pl-3"
              onClick={handleEdit}
            >
              Edit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
