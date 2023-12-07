import { host } from "../endpoint/endpoint";
import CredentialsProvider from "next-auth/providers/credentials";
import { FetchPost } from "../libs/api-libs";

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
  callbacks: {
    jwt({ token, account, profile, user }) {
      if (account?.provider === "credentials") {
        token.data = user?.data;
      }
      return token;
    },
    async session({ session, token }) {
      session.token = token.data;
      return session;
    },
  },
};
