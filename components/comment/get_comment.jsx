"use client";
import { useEffect, useState } from "react";
import { FetchApi } from "../libs/api-libs";

export default function HandleGetComment({ token, photoId, commentToggle }) {
  const [allComments, setAllComments] = useState([]);
  const [comments, setComments] = useState([]);
  const [showAllCommentsToggle, setShowAllCommentsToggle] = useState(false);
  const [commentCount, setCommentCount] = useState(0);

  useEffect(() => {
    if (!token) {
      return;
    }

    const fetchComments = async () => {
      const response = await FetchApi(
        process.env.NEXT_PUBLIC_API_URL + "/comments",
        token,
        "GET"
      );

      if (response.status === 200) {
        if (response.data == null) {
          return;
        }
        const filteredComments = response.data.filter(
          (comment) => comment.photoId == photoId
        );
        setAllComments(filteredComments);
        setCommentCount(filteredComments.length);
        setComments(filteredComments);
        setShowAllCommentsToggle(false);
      } else {
        console.log("Gagal mengambil komentar:", response.message);
      }
    };

    fetchComments();
  }, [photoId, token, commentToggle]);

  const handleShowAllCommentsToggle = () => {
    setComments(allComments);
    setShowAllCommentsToggle(!showAllCommentsToggle);
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
          style={{ display: comments.length > 0 ? "block" : "none" }}
        >
          View all {commentCount} comments
        </button>
      )}
    </div>
  );
}
