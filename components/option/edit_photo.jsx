/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { FetchApiWithBody } from "../libs/api-libs";
import { useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";

export default function EditPhoto({ photoId, onUpdate, onEdit }) {
  const { data: session } = useSession();
  const [caption, setCaption] = useState("");
  const [submited, setSubmited] = useState(false);
  const [showEditForm, setShowEditForm] = useState(true);
  const editFormRef = useRef(null);

  const handleChange = (e) => {
    if (e.target.name === "caption") {
      setCaption(e.target.value);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (e) => {
    if (
      editFormRef.current &&
      !editFormRef.current.contains(e.target) &&
      e.target.tagName !== "BUTTON"
    ) {
      onEdit();
      setShowEditForm(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await FetchApiWithBody(
      process.env.NEXT_PUBLIC_API_URL + `/photos/${photoId}`,
      session?.token,
      JSON.stringify({ caption }),
      "PUT"
    );
    onUpdate();
    onEdit();
    setSubmited(true);
  };

  if (!submited) {
    return (
      <div>
        {showEditForm && (
          <div ref={editFormRef}>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="caption"
                name="caption"
                value={caption}
                onChange={handleChange}
                className={`rounded-md focus:outline-none ${
                  submited ? "hidden" : ""
                }`}
              ></input>
              <button type="submit">Save Change</button>
            </form>
          </div>
        )}
      </div>
    );
  } else {
    return null;
  }
}
