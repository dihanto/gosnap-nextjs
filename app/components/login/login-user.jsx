"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginUser() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const route = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      return;
    }

    await signIn("credentials", {
      username,
      password,
      redirect: false,
      callbackUrl: "/",
    });

    route.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-slate-200 w-2/4 p-8 rounded-lg shadow-lg">
        <div className="flex justify-center mb-4">
          <h1 className="text-3xl font-semibold text-slate-800">Gosnap</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center my-3 h-9">
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
              placeholder="Username"
              className="w-3/4 rounded-md pl-3 border-0 text-slate-800 ring-1 ring-inset ring-slate-400 focus:ring-2 focus:ring-inset focus:ring-slate-600"
            />
          </div>
          <div className="flex justify-center my-3 h-9">
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Password"
              className="w-3/4 rounded-md pl-3 border-0 text-slate-800 ring-1 ring-inset ring-slate-400 focus:ring-2 focus:ring-inset focus:ring-slate-600"
            />
          </div>
          <div className="mt-4 bg-slate-200 flex justify-center mx-auto w-24 rounded-lg group  hover:bg-slate-600 ease-in-out duration-500">
            <button
              type="submit"
              className="text-lg w-full text-slate-700 group-hover:text-slate-200 ease-in-out duration-500"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
