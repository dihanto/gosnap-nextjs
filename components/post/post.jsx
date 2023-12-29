"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FetchApiWithBody } from "../libs/api-libs";

export default function PostPhoto({ token }) {
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const route = useRouter();

  const handleChange = (e) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else if (e.target.name === "caption") {
      setCaption(e.target.value);
    } else if (e.target.name === "photoBase64") {
      if (e.target.files.length > 0) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setImagePreview(e.target.result);
        };
        reader.readAsDataURL(e.target.files[0]);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestData = {
      title: title,
      caption: caption,
      photoBase64: imagePreview,
    };

    try {
      const response = await FetchApiWithBody(
        process.env.NEXT_PUBLIC_API_URL + "/photos",
        token,
        JSON.stringify(requestData),
        "POST"
      );
      if (response.status === 201) {
        route.push("/feed");
      } else {
        console.log("Failed to post photo:", response.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-sm">
      <div className="bg-lime-300 w-2/4 p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center my-3">
            <input
              type="text"
              name="title"
              value={title}
              onChange={handleChange}
              placeholder="Write a title..."
              className="w-3/4 rounded-md pl-3 p-1 border-0 text-slate-800 ring-1 ring-inset ring-slate-400 focus:ring-2 focus:ring-inset focus:ring-slate-600"
            />
          </div>
          <div className="flex justify-center my-3">
            <textarea
              name="caption"
              value={caption}
              onChange={handleChange}
              placeholder="Write a caption..."
              className="w-3/4 rounded-md pl-3 p-1 border-2 border-gray-200 text-slate-800 resize-none focus:outline-none focus:ring focus:ring-blue-400 focus:border-blue-400"
              rows="4"
            ></textarea>
          </div>
          <div className="flex items-center justify-center my-3">
            <label
              htmlFor="photoUpload"
              className="bg-gray-200 hover:bg-gray-300 rounded-lg p-2 cursor-pointer"
            >
              {imagePreview ? (
                <Image
                  src={imagePreview}
                  alt="Selected"
                  className="w-48 h-48 object-cover rounded-md"
                  width={300}
                  height={300}
                />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              )}
            </label>
            <input
              type="file"
              name="photoBase64"
              id="photoUpload"
              className="hidden"
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-center my-3">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
