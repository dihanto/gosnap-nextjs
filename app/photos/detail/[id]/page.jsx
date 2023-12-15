import { authOptions } from "@/components/auth/auth";
import PhotoDisplay from "@/components/content/image_content";
import { FetchApi } from "@/components/libs/api-libs";
import { getServerSession } from "next-auth";

export default async function DetailPicture(props) {
  const { params } = props;
  const session = await getServerSession(authOptions);
  console.log(session);
  const response = await FetchApi(
    process.env.NEXT_PUBLIC_API_URL + "/photos/" + params.id,
    session.token,
    "GET"
  );

  console.log(response);
  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto border border-gray-600">
        <PhotoDisplay photo={response.data} />
      </div>
    </div>
  );
}
