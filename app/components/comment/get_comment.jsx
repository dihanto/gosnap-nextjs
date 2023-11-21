import { useEffect, useState } from "react";
import { host } from "../endpoint/endpoint";

export default function HandleGetComment({ token, photoId, commentToggle }) {
  const [allComments, setAllComments] = useState([]);
  const [comments, setComments] = useState([]);
  const [showAllCommentsToggle, setShowAllCommentsToggle] = useState(false);
  const [commentCount, setCommentCount] = useState(0);

  useEffect(() => {
    if (!token) {
      return;
    }

    async function fetchComments() {
      try {
        const requestOptions = {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        };

        const response = await fetch(
          host.commentEndpoint.getComment(),
          requestOptions
        );
        const responseJson = await response.json();

        if (responseJson.status === 200) {
          if (responseJson.data == null) {
            return;
          }
          const filteredComments = responseJson.data.filter(
            // eslint-disable-next-line eqeqeq
            (comment) => comment.photoId == photoId
          );
          setAllComments(filteredComments);
          setCommentCount(filteredComments.length);
          setComments(filteredComments);
          setShowAllCommentsToggle(false);
        } else {
          console.log("Gagal mengambil komentar:", responseJson.message);
        }
      } catch (error) {
        console.error("Terjadi kesalahan:", error);
      }
    }

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
