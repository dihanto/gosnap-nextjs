import Image from "next/image";
import Follow from "../follow/follow";
import { UserFilter } from "./user_filter";
import GetAllUser from "./get_all_user";
import { UserCircle } from "@phosphor-icons/react/dist/ssr";

const ListUser = async ({ token }) => {
  const users = await GetAllUser(token);
  const filteredUsers = await UserFilter(users, token);
  return (
    <div>
      <div>
        <p className="font-semibold text-slate-400 my-3">Suggested for you</p>
      </div>
      <div>
        {filteredUsers?.map((user) => {
          return (
            <div
              key={user.username}
              className="mb-[10px] font-medium flex items-center"
            >
              {user.profilePicture !== "empty" ? (
                <Image
                  width={36}
                  height={36}
                  src={user.profilePicture}
                  alt="profile"
                  className="w-8 h-8 object-cover rounded-full mr-2"
                />
              ) : (
                <UserCircle size={38} />
              )}
              <div className="flex-1">
                <p>{user.username}</p>
                <p className="text-slate-500 text-xss leading-none">
                  Followed by...
                </p>
              </div>
              <Follow token={token} username={user.username} />
            </div>
          );
        })}
      </div>
      <div className="text-slate-400 mt-5">
        <a href="#" className="mr-1">
          About
        </a>
        .
        <a href="#" className="mx-1">
          Help
        </a>
        .
        <a href="#" className="mx-1">
          Privace
        </a>
        .
        <a href="#" className="mx-1">
          Terms
        </a>
      </div>
      <div className="text-slate-400 mt-3">
        <p>© 2023 GOSNAP FROM HANS</p>
      </div>
    </div>
  );
};

export default ListUser;
