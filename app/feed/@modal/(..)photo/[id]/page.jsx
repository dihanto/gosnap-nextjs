import { authOptions } from "@/components/auth/auth";
import PhotoDisplay from "@/components/content/image_content";
import Modal from "@/components/core/Modal";
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

  return (
    <Modal>
      <PhotoDisplay photo={response.data} />
    </Modal>
  );
}
