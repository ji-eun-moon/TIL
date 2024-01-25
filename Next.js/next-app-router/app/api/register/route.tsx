import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from "bcrypt";
import prisma from "@/prisma/client";

// 데이터 유효성 검사에 사용할 객체 정의
const schema = z.object({
  email: z.string().email(), // 이메일 : 문자열
  password: z.string().min(5), // 비밀번호 : 문자열 + 최소 5글자
});

// POST 함수 정의
export async function POST(request: NextRequest) {
  // 1. 회원가입에 입력한 정보 받아오기
  const body = await request.json();

  // 2. 데이터 유효성 검사
  const validation = schema.safeParse(body);
  // 오류가 발생하면 오류 메시지를 응답으로 리턴
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  // 3. 가입 여부 검증
  const user = await prisma.user.findUnique({
    where: { email: body.email },
  });
  // 이미 가입되어 있는 계정이면 오류 메시지를 응답으로 전달
  if (user) {
    return NextResponse.json({ error: "User Already exists" }, { status: 400 });
  }

  // 4. 비밀 번호 암호화
  const hashedPassword = await bcrypt.hash(body.password, 10);

  // 5. 사용자 생성
  const newUser = await prisma.user.create({
    data: {
      email: body.email,
      hashedPassword,
    },
  });

  // 6. 생성된 사용자의 이메일 응답으로 반환
  return NextResponse.json({ email: newUser.email });
}
