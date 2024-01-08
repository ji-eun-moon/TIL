// import { NextRequest, NextResponse } from "next/server";

// export function GET(
//   request: NextRequest,
//   { params }: { params: { id: number } }
// ) {
//   // 사용자 ID 값이 10보다 큰 경우 404 오류 출력
//   if (params.id > 10) {
//     return NextResponse.json({ error: "USER NOT FOUND" }, { status: 404 });
//   }

//   // 사용자 정보를 응답으로 전달
//   return NextResponse.json([
//     { id: 1, name: "Jieun" },
//     { id: 2, name: "Hansol" },
//   ]);
// }

import { NextRequest, NextResponse } from "next/server";

export function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const userData = [
    { id: 1, name: "Jieun" },
    { id: 2, name: "Hansol" },
  ];

  const requestedId = parseInt(params.id);

  const user = userData.find((user) => user.id === requestedId);

  if (!user) {
    return NextResponse.json({ error: "USER NOT FOUND" }, { status: 404 });
  }

  return NextResponse.json(user);
}
