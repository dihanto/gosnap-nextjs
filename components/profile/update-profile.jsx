/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Navbar from "@/app/dashboard/@navbar/page";
import { useEffect, useState } from "react";
import GetUserLogin from "../suggest/get_user_login";
import { FetchApiWithBody } from "../libs/api-libs";
import ProfilePicture from "./profile-picture";
import { useRouter } from "next/navigation";

export default function UpdateProfile({ token }) {
  const [updateProfilePicture, setUpdateProfilePicture] = useState(null);
  const [user, setUser] = useState(null);
  const router = useRouter();

  const handleUserLogin = async () => {
    try {
      const response = await GetUserLogin(token);
      setUser(response);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    handleUserLogin();
  }, []);

  const handleChange = (e) => {
    if (e.target.name === "profilePicture") {
      if (e.target.files.length > 0) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setUpdateProfilePicture(e.target.result);
        };
        reader.readAsDataURL(e.target.files[0]);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await FetchApiWithBody(
      process.env.NEXT_PUBLIC_API_URL + "/users",
      token,
      JSON.stringify({ profilePicture: updateProfilePicture }),
      "PUT"
    );
    if (response.status === 200) {
      setUpdateProfilePicture(response.data.profilePicture);
      router.push("/profile");
    } else {
      console.error("failed to update user:", response.message);
    }
  };

  return (
    <div className="bg-slate-50 flex text-sm">
      <Navbar />
      <div className="w-1/5"></div>
      <div className="w-4/5 ml-28">
        <h1 className="text-lg mt-7 ml-4 mb-3">Edit Profile</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <div className="ring-1 ring-slate-400 rounded-full mr-4">
              <ProfilePicture profilePicture={user?.profilePicture} />
            </div>
            <div>
              <p>{user?.username}</p>
              <label
                htmlFor="profilePicture"
                className="my-2 cursor-pointer text-blue-600 font-semibold"
              >
                Change profile picture
              </label>
              <input
                type="file"
                name="profilePicture"
                id="profilePicture"
                onChange={handleChange}
                className="hidden"
              />
            </div>
          </div>
          <br />
          <button
            type="submit"
            className="bg-slate-900 hover:bg-slate-500 rounded-lg text-white px-2 py-1 mt-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
