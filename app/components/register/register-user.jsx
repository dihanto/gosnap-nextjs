"use client";
import { useState } from "react";
import { host } from "../endpoint/endpoint";
import { FetchUser } from "../libs/api-libs";
import Link from "next/link";

const RegisterUser = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  //   const [login, setLogin] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "username") {
      setUsername(e.target.value);
    } else if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    } else if (e.target.name === "age") {
      setAge(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !name || !email || !password || !age) {
      return;
    }

    const registerData = {
      username,
      name,
      email,
      password,
      age: parseInt(age, 10),
    };

    const responseRegister = await FetchUser(
      host.UserEndpoint.register(),
      JSON.stringify(registerData)
    );

    if (responseRegister.status === 201) {
      const loginData = {
        username,
        password,
      };

      const responseLogin = await FetchUser(
        host.UserEndpoint.login(),
        JSON.stringify(loginData)
      );
      if (responseLogin.status === 200) {
        console.log("success login", responseLogin.data);
        document.cookie = `jwt=${responseLogin.data}; path=/`;
      }
    } else {
      console.log(responseRegister.message);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // setLogin(true);

    // if (login) {
    //   navigate("/login");
    // }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-slate-200 w-2/5 p-8  rounded-lg shadow-lg">
        <div className="flex justify-center mb-4">
          <h1 className="text-lg font-semibold text-slate-600 text-center">
            Welcome to Gosnap, please sign up to see photos from your friends.
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center my-2 h-7">
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
              placeholder="Username"
              className="w-3/4 rounded-md pl-3"
            />
          </div>
          <div className="flex justify-center my-2 h-7">
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Name"
              className="w-3/4 rounded-md pl-3"
            />
          </div>
          <div className="flex justify-center  my-2 h-7">
            <input
              type="text"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Email"
              className="w-3/4 rounded-md pl-3"
            />
          </div>
          <div className="flex justify-center  my-2 h-7">
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Password"
              className="w-3/4 rounded-md pl-3"
            />
          </div>
          <div className="flex justify-center  my-2 h-7">
            <input
              type="number"
              name="age"
              value={age}
              onChange={handleChange}
              placeholder="Age"
              className="w-3/4 rounded-md pl-3"
            />
          </div>
          <div className="mt-4 bg-slate-200 flex justify-center mx-auto w-28 rounded-lg group hover:bg-slate-600 ease-in-out duration-500">
            <button
              type="submit"
              className="text-lg w-full text-slate-700 group-hover:text-slate-200 ease-in-out duration-500"
            >
              Sign up
            </button>
          </div>
        </form>
        <form onSubmit={handleLogin}>
          <div className=" flex flex-col justify-center items-center mt-3">
            <p className="mb-2 text-base text-slate-800">
              Already have an account?
            </p>
            <Link
              href="/login"
              className="bg-slate-200 rounded-lg text-center text-slate-700 text-lg w-24 hover:bg-slate-600 hover:text-slate-200 ease-in-out duration-500"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterUser;
