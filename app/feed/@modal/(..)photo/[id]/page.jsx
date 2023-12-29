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
  const { params } = props;

  const handleGetPhoto = async () => {
    const response = await FetchApi(
      process.env.NEXT_PUBLIC_API_URL + "/photos/" + params.id,
      session?.token,
      "GET"
    );
    setPhoto(response?.data);
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
    if (!photo) {
      handleGetPhoto();
    }
  });
  if (photo) {
    return (
      <Modal>
        <UserProfile user={photo?.user} modal={isModal} photoId={photo.id} />
        <PhotoDisplay photo={photo} />
        <PhotoDetails
          photo={photo}
          token={session?.token}
          likeFromModal={photo?.like.likeCount}
        />
      </Modal>
    );
  }
}
