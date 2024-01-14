import { addUser } from "@/service/user";
import NextAuth, { NextAuthOptions } from "next-auth"
import KakaoProvider from 'next-auth/providers/kakao'

export const authOptions: NextAuthOptions = {
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    async signIn({ user: { id, name, image, email } }) {
      if (!email) {
        return false;
      }
      addUser({
        id,
        name: name || '',
        image,
        email,
      });
      return true;
    },

    async session({ session, token }) {
      const user = session?.user;
      if (user) {
        session.user = {
          ...user,
          id: token.id as string
        }
      }
      return session
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    }
  },
  pages: {
    signIn: '/auth/signin',
  }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }