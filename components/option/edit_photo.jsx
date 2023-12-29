"use client";
import { FetchApiWithBody } from "../libs/api-libs";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EditPhoto({ photoId, onUpdate, onEdit }) {
  const { data: session } = useSession();
  const [caption, setCaption] = useState("");
  const [submited, setSubmited] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "caption") {
      setCaption(e.target.value);
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
    );
  } else {
    return null;
  }
}
