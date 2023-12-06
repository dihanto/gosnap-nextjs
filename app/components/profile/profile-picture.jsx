import { UserCircle } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export default function ProfilePicture({ profilePicture }) {
  return (
    <div>
      {profilePicture !== "empty" ? (
        profilePicture && (
          <Image
            src={profilePicture}
            alt="profile picture"
            className="w-11 h-11 rounded-full object-cover"
            width={100}
            height={100}
          />
        )
      ) : (
        <UserCircle size={32} />
      )}
    </div>
  );
}
