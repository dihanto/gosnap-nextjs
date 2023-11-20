import { host } from "../endpoint/endpoint";
import { FetchApi } from "../libs/api-libs";

export default function Follow({ token, username, onFollowToggle }) {
  const handleFollow = async () => {
    const response = await FetchApi(
      host.followEndpoint.follow(username),
      token,
      "POST"
    );
    if (response.status === 200) {
      onFollowToggle();
    } else {
      console.log("fail follow", response.message);
    }
  };

  return (
    <span className="flex-1">
      <button onClick={handleFollow} className="text-sky-500">
        <span>Follow</span>
      </button>
    </span>
  );
}
