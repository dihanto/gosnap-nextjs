import { useEffect, useRef, useState } from "react";
import EditPhoto from "../option/edit_photo";
import { FetchApi } from "../libs/api-libs";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function PhotoOptions({ photoId, modal, onUpdate }) {
  const [showEditPhoto, setShowEditPhoto] = useState(false);
  const router = useRouter();
  const [showOptionsButton, setShowOptionsButton] = useState(false);
  const { data: session } = useSession();
  const optionsEditButtonRef = useRef(null);

  const handleOption = () => {
    setShowOptionsButton(!showOptionsButton);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (
      optionsEditButtonRef.current &&
      !optionsEditButtonRef.current.contains(event.target) &&
      event.target.tagName !== "BUTTON"
    ) {
      setShowOptionsButton(false);
    }
  };

  const handleDelete = async () => {
    const res = await FetchApi(
      process.env.NEXT_PUBLIC_API_URL + `/photos/${photoId}`,
      session?.token,
      "DELETE"
    );
    alert(res.message);
    router.back();
  };

  const handleEdit = () => {
    setShowEditPhoto((prev) => !prev);
  };
  return (
    <div>
      <div>
        {modal && (
          <button
            className="transition duration-300 ease-in-out transform hover:scale-110 mr-1"
            onClick={handleOption}
          >
            ...
          </button>
        )}
        {showOptionsButton && (
          <div
            ref={optionsEditButtonRef}
            className="absolute right-2 w-[74px] h-20 bg-white rounded-lg shadow-xl text-sm"
          >
            <button
              className="transition duration-200 ease-in-out transform hover:text-blue-400 pl-3 my-2"
              onClick={handleDelete}
            >
              Delete
            </button>
            <br />
            <button
              className="transition duration-200 ease-in-out transform hover:text-blue-400 pl-3"
              onClick={handleEdit}
            >
              Edit
            </button>
          </div>
        )}
      </div>
      {showEditPhoto && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg">
          <EditPhoto
            photoId={photoId}
            onUpdate={onUpdate}
            onEdit={handleEdit}
          />
        </div>
      )}
    </div>
  );
}
