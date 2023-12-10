"use client";
import { useState } from "react";
import { FetchApi } from "../libs/api-libs";

export default function Follow({ token, username }) {
  const [followToggle, setFollowToggle] = useState(true);
  const handleFollowToggle = () => {
    setFollowToggle(!followToggle);
  };
  const handleFollow = async () => {
    const response = await FetchApi(
      process.env.NEXT_PUBLIC_API_URL + `/follows/${username}`,
      token,
      "POST"
    );
    if (response.status === 200) {
      handleFollowToggle();
    } else {
      console.log("fail follow", response.message);
    }
  };

  return (
    <span className="flex-1">
      <button onClick={handleFollow} className="text-sky-500">
        {followToggle ? <span>Follow</span> : <span> Unfollow</span>}
      </button>
    </span>
  );
}
