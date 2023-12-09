import { getServerSession } from "next-auth";
import { GetPhotos } from "../../components/content/get_photos";
import { authOptions } from "../../components/auth/auth";
import UserProfile from "../../components/content/user_profile";
import PhotoDisplay from "../../components/content/image_content";
import PhotoDetails from "../../components/content/photo_details";

export default async function Page() {
  const session = await getServerSession(authOptions);
  const token = session?.token;
  const data = await GetPhotos(token);
  return (
    <div className="w-4/6 pt-5">
      <div className="border-b border-slate-300 w-[500px] mx-auto mb-2"></div>
      {data.photos.map((photo) => (
        <div key={photo.id} className="pb-3 text-left text-sm">
          <UserProfile user={photo.user} />
          <PhotoDisplay photo={photo} />
          <PhotoDetails
            photo={photo}
            token={token}
            likeNumbers={data.likeNumbers}
          />
          <div className="border-b border-slate-300 w-[500px] mx-auto"></div>
        </div>
      ))}
    </div>
  );
}
