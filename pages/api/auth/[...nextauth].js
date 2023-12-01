import { host } from "@/app/components/endpoint/endpoint";
import { FetchUser } from "@/app/components/libs/api-libs";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = await FetchUser(
          host.UserEndpoint.login(),
          JSON.stringify(credentials)
        );
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
});
