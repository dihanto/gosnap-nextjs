"use client";

import React, { useEffect, useState } from "react";
import SkeletonLoader from "../../../components/skeleton/skeleton";
import { GetPhotos } from "../../../components/content/get_photos";
import { UseIntersection } from "../../../components/content/lazy_loader";
import UserProfile from "../../../components/content/user_profile";
import PhotoDisplay from "../../../components/content/image_content";
import PhotoDetails from "../../../components/content/photo_details";
import { useSession } from "next-auth/react";

export default function Content() {
  const [photos, setPhotos] = useState([]);
  const [likeNumbers, setLikeNumbers] = useState({});
  const [commentToggle, setCommentToggle] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);
  const { data: session } = useSession();
  const token = session?.token;
  useEffect(() => {
    GetPhotos(
      page,
      token,
      setPhotos,
      setLikeNumbers,
      setPage,
      setIsFetching,
      setIsLoading
    );
  }, [page, token]);

  UseIntersection(
    "infinite-scroll-target",
    () => {
      if (!isFetching) {
        GetPhotos(
          page,
          token,
          setPhotos,
          setLikeNumbers,
          setPage,
          setIsFetching,
          setIsLoading
        );
      }
    },
    [
      isFetching,
      page,
      token,
      setPhotos,
      setLikeNumbers,
      setPage,
      setIsFetching,
      setIsLoading,
    ]
  );

  const handleCommentToggle = () => {
    setCommentToggle(!commentToggle);
  };

  return (
    <div className="w-4/6 pt-5">
      <div className="border-b border-slate-300 w-[500px] mx-auto mb-2"></div>
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        photos.map((photo) => (
          <div key={photo.id} className="pb-3 text-left text-sm">
            <UserProfile user={photo.user} />
            <PhotoDisplay photo={photo} />
            <PhotoDetails
              photo={photo}
              token={token}
              likeNumbers={likeNumbers}
              setLikeNumbers={setLikeNumbers}
              commentToggle={commentToggle}
              onCommentToggle={handleCommentToggle}
            />
            <div className="border-b border-slate-300 w-[500px] mx-auto"></div>
          </div>
        ))
      )}
      <div
        id="infinite-scroll-target"
        className="h-10 w-10 absolute right-0 -bottom-[330px]"
      ></div>
    </div>
  );
}
