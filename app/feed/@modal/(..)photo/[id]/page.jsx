/* eslint-disable react-hooks/exhaustive-deps */
"use client";
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

  const handleUpdate = async () => {
    setIsUpdate(true);
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
  }, [photo, isUpdate]);
  if (photo) {
    return (
      <Modal>
        <div className="flex gap-4">
          <div className="pl-2 h-[620px] border-r-[1px] border-slate-300 flex items-center">
            <PhotoDisplay photo={photo} />
          </div>
          <div className="">
            <div className="mt-2 ">
              <UserProfile
                user={photo?.user}
                modal={isModal}
                photoId={photo.id}
                onUpdate={handleUpdate}
              />
              <div className="mt-2 absolute right-0 border-b-[1px] border-slate-300 w-[516px]"></div>
            </div>
            <div className="absolute bottom-1 ">
              <div className="mt-2 absolute right-0 border-b-[1px] border-slate-300 w-[516px]"></div>

              <PhotoDetails
                photo={photo}
                token={session?.token}
                likeFromModal={photo?.like.likeCount}
              />
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}
