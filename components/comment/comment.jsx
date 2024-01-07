/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useState } from "react";
import HandleGetComment from "./get_comment";
import HandleWriteComment from "./write_comment";

export function RenderComment({ token, photoId }) {
  const [comments, setComments] = useState([]);
  const [commentLength, setCommentLength] = useState(0);
  const [commentToggle, setCommentToggle] = useState(false);
  const [showAllCommentsToggle, setShowAllCommentsToggle] = useState(false);

  const getComment = async () => {
    const response = await HandleGetComment(token, photoId);
    setComments(response.comments);
    setCommentLength(response.length);
  };

  useEffect(() => {
    getComment();
  }, [commentToggle]);

  const handleShowAllCommentsToggle = () => {
    setShowAllCommentsToggle(!showAllCommentsToggle);
  };

  const handleCommentToggle = () => {
    setCommentToggle(!commentToggle);
  };
  return (
    <div className="mt-1">
      {showAllCommentsToggle ? (
        <div>
          {comments.map((comment) => (
            <div key={comment.id}>
              <p className="text-sm2 leading-sm2 mb-1">
                <span className="font-semibold">{comment.User.username} </span>
                {comment.message}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <button
          className="text-sm2 leading-sm2 text-slate-600 font-normal"
          onClick={handleShowAllCommentsToggle}
          style={{ display: commentLength > 0 ? "block" : "none" }}
        >
          View all {commentLength} comments
        </button>
      )}
      <div>
        <HandleWriteComment
          token={token}
          photoId={photoId}
          onCommentToggle={handleCommentToggle}
        />
      </div>
    </div>
  );
}
