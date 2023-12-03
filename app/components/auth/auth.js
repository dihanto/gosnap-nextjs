import { host } from "../endpoint/endpoint";
import { FetchPost } from "../libs/api-libs";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = await FetchPost(
          host.UserEndpoint.login(),
          JSON.stringify(credentials)
        );
        console.log("user", user);

        if (user) {
          return {
            jwt: user.data,
          };
        } else {
          return null;
        }
      },
    }),
  ],
};
