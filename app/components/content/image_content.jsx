import React from "react";
import Image from "next/image";

const PhotoDisplay = ({ photo }) => {
  return (
    <div className="flex items-center justify-center w-[500px] h-[500px] bg-black mx-auto mt-1">
      <Image
        width={500}
        height={500}
        src={photo.photoBase64}
        alt={photo.title}
        className="rounded-sm w-full h-[500px] object-cover"
      />
    </div>
  );
};

export default PhotoDisplay;
