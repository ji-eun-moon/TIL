import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/prisma/client";
import bcrypt from "bcrypt";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials, req) {
        // credentials 인자 값을 통해 사용자가 입력한 이메일, 패스워드 추출
        if (!credentials?.email || !credentials?.password) return null;

        // 사용자 존재 여부 확인
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        // 사용자가 없으면 null 리턴
        if (!user) return null;

        // 데이터베이스의 암호화된 비밀번호와 사용자가 입력한 비밀번호가 같은지 비교
        const passwordMatch = await bcrypt.compare(
          credentials.password,
          user.hashedPassword!
        );

        // 비밀번호가 일치하면 사용자 리턴
        return passwordMatch ? user : null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
