"use client";
import { useState } from "react";
import { host } from "../endpoint/endpoint";

export default function HandleWriteComment({
  token,
  photoId,
  onCommentToggle,
}) {
  const [message, setMessage] = useState("");

  const handleSubmitComment = async () => {
    const commentData = {
      message,
      photoId,
    };
    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentData),
    };
    const response = await fetch(
      host.commentEndpoint.writeComment(),
      requestOptions
    );
    const responseJson = await response.json();
    if (responseJson.status === 201) {
      setMessage("");
      onCommentToggle();
    } else {
      console.log("failed to send comment : ", responseJson.message);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmitComment();
    }
  };

  return (
    <div>
      <form className="text-sm2 leading-sm2 mt-1">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Add a comment..."
          className="placeholder-text-slate-500 mb-4 focus:outline-none bg-slate-50 placeholder:font-light w-full h-auto"
        />
      </form>
    </div>
  );
}
