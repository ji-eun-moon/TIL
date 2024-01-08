import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "a" },
    { id: 2, name: "b" },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  // 요청한 데이터가 존재하지 않는다면 404 에러 반환
  if (!body.name) {
    return NextResponse.json({ error: "Name is required" }, { status: 404 });
  }

  if (!body.id) {
    return NextResponse.json({ error: "Id is required" }, { status: 404 });
  }

  // 그렇지 않다면 전달 객체를 응답 객체로 반환
  return NextResponse.json({ id: body.id, name: body.name });
}
