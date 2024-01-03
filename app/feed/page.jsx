/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { GetPhotos } from "@/components/content/get_photos";
import PhotoDisplay from "@/components/content/image_content";
import { UseIntersection } from "@/components/content/lazy_loader";
import Loader from "@/components/content/loader";
import PhotoDetails from "@/components/content/photo_details";
import UserProfile from "@/components/content/user_profile";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const [photos, setPhotos] = useState([]);
  const [likeNumbers, setLikeNumbers] = useState(0);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) {
      return;
    }
    const fetchData = async () => {
      if (page === 0) {
        setPage((prev) => prev + 1);
      }
      setIsLoading(true);
      const res = await GetPhotos(session?.token, page);
      setPhotos(res?.photos);
      setLikeNumbers(res?.likeNumbers);
      setPage((prev) => prev + 1);
      setIsLoading(false);
    };

    fetchData();
  }, [session?.token]);

  UseIntersection(
    "infinite-scroll-target",
    () => {
      if (photos != undefined && !isLoading) {
        const fetchData = async () => {
          const res = await GetPhotos(session?.token, page);
          if (res) {
            setPhotos((prevPhotos) => [...prevPhotos, ...res.photos]);
            setLikeNumbers((prevLikeNumbers) => ({
              ...prevLikeNumbers,
              ...res.likeNumbers,
            }));
            setPage((prev) => prev + 1);
          }
        };
        fetchData();
      }
    },
    [page, likeNumbers]
  );

  return (
    <div className="w-4/6 pt-5">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="border-b border-slate-300 w-[500px] mx-auto mb-2"></div>
          {photos?.map((photo) => (
            <div key={photo.id} className="pb-3 text-left text-sm">
              <UserProfile user={photo.user} />
              <Link href={`/photo/${photo.id}`} scroll={false}>
                <PhotoDisplay photo={photo} />
              </Link>
              <PhotoDetails
                photo={photo}
                token={session.token}
                likeNumbers={likeNumbers}
              />
              <div className="border-b border-slate-300 w-[500px] mx-auto"></div>
            </div>
          ))}
        </>
      )}

      <div id="infinite-scroll-target" className="h-5 w-5"></div>
      <div className="h-2"></div>
    </div>
  );
}
