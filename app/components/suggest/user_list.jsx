"use client";
import Image from "next/image";
import images from "../assets/asset";
import Follow from "../follow/follow";
import { UserFilter } from "./user_filter";
import { host } from "../endpoint/endpoint";
import { FetchApi } from "../libs/api-libs";
import { useCallback, useEffect, useState } from "react";

const ListUser = ({ token }) => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [followToggle, setFollowToggle] = useState(true);

  const getAllUser = useCallback(async () => {
    const response = await FetchApi(
      host.UserEndpoint.getAllUser(),
      token,
      "GET"
    );
    setUsers(response.data);
  }, [token]);

  useEffect(() => {
    getAllUser();
  }, [getAllUser]);

  useEffect(() => {
    UserFilter(users, token).then((filteredResult) => {
      setFilteredUsers(filteredResult);
    });
  }, [users, token, followToggle]);

  const handleFollowTogle = () => {
    setFollowToggle(!followToggle);
  };
  return (
    <div>
      <div>
        {filteredUsers?.map((user) => {
          return (
            <div
              key={user.username}
              className="mb-[10px] font-medium flex items-center"
            >
              <Image
                src={
                  user.profilePicture !== "empty"
                    ? user.profilePicture
                    : images.profilePicture
                }
                alt="profile picture"
                width={32}
                height={32}
                className="w-8 h-8 rounded-full object-cover mr-2"
              />
              <div>
                <p>{user.username}</p>
                <p className="text-slate-500 text-xss leading-none">
                  Followed by...
                </p>
              </div>
              <Follow
                token={token}
                username={user.username}
                onFollowToggle={handleFollowTogle}
              />
            </div>
          );
        })}
      </div>
      <div className="text-slate-400 mt-5">
        <a href="#" className="mr-1">
          About
        </a>
        .
        <a href="#" className="mx-1">
          Help
        </a>
        .
        <a href="#" className="mx-1">
          Privace
        </a>
        .
        <a href="#" className="mx-1">
          Terms
        </a>
      </div>
      <div className="text-slate-400 mt-3">
        <p>© 2023 GOSNAP FROM HANS</p>
      </div>
    </div>
  );
};

export default ListUser;
