import { authOptions } from "@/components/auth/auth";
import PhotoDisplay from "@/components/content/image_content";
import PhotoDetails from "@/components/content/photo_details";
import UserProfile from "@/components/content/user_profile";
import { FetchApi } from "@/components/libs/api-libs";
import { getServerSession } from "next-auth";

export default async function DetailPicture(props) {
  const { params } = props;
  const session = await getServerSession(authOptions);
  const response = await FetchApi(
    process.env.NEXT_PUBLIC_API_URL + "/photos/" + params.id,
    session.token,
    "GET"
  );

  console.log(response);

  return (
    <div className="container mx-auto p-10">
      <div className="w-1/2 mx-auto border border-gray-600">
        <UserProfile user={response.data.user} />
        <PhotoDisplay photo={response.data} />
        <PhotoDetails
          photo={response.data}
          token={session.token}
          likeNumbers={response.data.like}
        />
      </div>
    </div>
  );
}
