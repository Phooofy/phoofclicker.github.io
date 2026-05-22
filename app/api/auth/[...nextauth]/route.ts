import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {},
        password: {},
      },
      async authorize(credentials) {
        const users = [
          { id: "1", username: "admin", password: "femboysaregreat" },
          { id: "2", username: "navy", password: "gonavy" },
          { id: "3", username: "test", password: "gaming789" },
        ];

        const user = users.find(
          (u) =>
            u.username === credentials?.username &&
            u.password === credentials?.password
        );

        return user ? { id: user.id, name: user.username } : null;
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },

  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };