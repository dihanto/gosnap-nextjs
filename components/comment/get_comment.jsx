import { FetchApi } from "../libs/api-libs";

export default async function HandleGetComment(token, photoId) {
  const response = await FetchApi(
    process.env.NEXT_PUBLIC_API_URL + "/comments",
    token,
    "GET"
  );

  if (response.status === 200) {
    if (response.data == null) {
      return;
    }
    const filteredComments = response.data.filter(
      (comment) => comment.photoId == photoId
    );

    const data = {
      comments: filteredComments,
      length: filteredComments.length,
    };
    return data;
  } else {
    console.log("Gagal mengambil komentar:", response.message);
  }
}
