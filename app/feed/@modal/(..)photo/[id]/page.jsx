/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import HandleGetComment from "@/components/comment/get_comment";
import HandleWriteComment from "@/components/comment/write_comment";
import PhotoDisplay from "@/components/content/image_content";
import PhotoDetails from "@/components/content/photo_details";
import UserProfile from "@/components/content/user_profile";
import Modal from "@/components/core/Modal";
import { useModalContext } from "@/components/core/Modal/modal_context";
import { FetchApi } from "@/components/libs/api-libs";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function DetailPicture(props) {
  const { modalData } = useModalContext();
  const { data: session } = useSession();
  const [photo, setPhoto] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentToggle, setCommentToggle] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const { params } = props;

  const handleGetPhoto = async () => {
    const response = await FetchApi(
      process.env.NEXT_PUBLIC_API_URL + "/photos/" + params.id,
      session?.token,
      "GET"
    );
    setPhoto(response?.data);
  };

  const getComment = async () => {
    const response = await HandleGetComment(session?.token, photo?.id);
    setComments(response.comments);
  };

  const handleUpdate = async () => {
    setIsUpdate(true);
  };

  const handleCommentToggle = () => {
    setCommentToggle(!commentToggle);
  };

  useEffect(() => {
    if (modalData) {
      setIsModal((prevState) => !prevState);
    }
    if (!modalData) {
      setIsModal((prevState) => !prevState);
    }
  }, [modalData]);

  useEffect(() => {
    handleGetPhoto();
    getComment();
  }, [photo, isUpdate]);
  if (photo) {
    return (
      <Modal>
        <div className="flex">
          <div className="pl-2 h-[620px] border-r-[1px] border-slate-300 flex items-center">
            <PhotoDisplay photo={photo} />
          </div>

          <div className="flex flex-col w-full">
            <div className="my-2 pl-2">
              <UserProfile
                user={photo?.user}
                modal={isModal}
                photoId={photo.id}
                onUpdate={handleUpdate}
              />
            </div>
            <div className="mt-2 border-b-[1px] border-slate-300 w-full"></div>

            <div className="flex-1 space-y-4 mt-[5px] w-full pl-2">
              {comments.map((comment) => (
                <div key={comment.id} className="flex mb-2">
                  <div className="text-sm font-semibold pr-2">
                    {comment.User.username}
                  </div>
                  <div className="text-sm">{comment.message}</div>
                </div>
              ))}
            </div>
            <div className="mt-2 border-b-[1px] border-slate-300 w-full"></div>
            <div className="pl-2">
              <PhotoDetails
                photo={photo}
                token={session?.token}
                likeFromModal={photo?.like.likeCount}
                modal={isModal}
              />
            </div>
            <div className="mt-3 border-b-[1px] border-slate-300 w-full"></div>
            <HandleWriteComment
              token={session?.token}
              photoId={photo.id}
              onCommentToggle={handleCommentToggle}
            />
          </div>
        </div>
      </Modal>
    );
  }
}
