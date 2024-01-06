import CredentialsProvider from "next-auth/providers/credentials";
import { FetchApi, FetchPost } from "../libs/api-libs";

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
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
          process.env.NEXT_PUBLIC_API_URL + "/users/login",
          JSON.stringify(credentials)
        );
        if (user) {
          const res = await FetchApi(
            process.env.NEXT_PUBLIC_API_URL + "/users",
            user.data,
            "GET"
          );
          user.username = res.data.username;
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    jwt({ token, account, profile, user }) {
      if (account?.provider === "credentials") {
        token.data = user?.data;
        token.user = user?.username;
      }
      return token;
    },
    async session({ session, token }) {
      session.token = token.data;
      session.user = token.user;
      return session;
    },
  },
};
