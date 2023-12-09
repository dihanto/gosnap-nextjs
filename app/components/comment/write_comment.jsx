"use client";
import { useState } from "react";
import { host } from "../endpoint/endpoint";
import { FetchApiWithBody } from "../libs/api-libs";
import HandleGetComment from "./get_comment";
import { HandleCommentToggle } from "./comment_toggle";

export default function HandleWriteComment({ token, photoId }) {
  const [message, setMessage] = useState("");
  const [commentToggle, setCommentToggle] = useState(false);

  const handleSubmitComment = async () => {
    const commentData = {
      message,
      photoId,
    };
    const response = await FetchApiWithBody(
      host.commentEndpoint.writeComment(),
      token,
      JSON.stringify(commentData),
      "POST"
    );
    if (response.status === 201) {
      setMessage("");
      HandleCommentToggle(setCommentToggle, commentToggle);
    } else {
      console.log("failed to send comment : ", response.message);
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
      <HandleGetComment
        token={token}
        photoId={photoId}
        commentToggle={commentToggle}
      />

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
