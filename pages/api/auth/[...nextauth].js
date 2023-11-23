import { host } from "@/app/components/endpoint/endpoint";
import { FetchUser } from "@/app/components/libs/api-libs";
import NextAuth from "next-auth";
import { Providers } from "next-auth";

export default NextAuth({
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const user = await FetchUser(
          host.UserEndpoint.login(),
          JSON.stringify(credentials)
        );

        console.log(user);

        if (user) {
          return Promise.resolve(user);
        } else {
          return Promise.resolve(null);
        }
      },
    }),
  ],
});
