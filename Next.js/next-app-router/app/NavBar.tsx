"use client";

import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

const NavBar = () => {
  const { status, data: session } = useSession();

  // 로딩 중인 경우
  if (status === "loading") {
    return null;
  }

  return (
    <div className="flex">
      <Link className="mr-5" href="/">
        Next.js
      </Link>
      <Link href="/users" className="mr-5">
        Users
      </Link>
      {/* 인증 된 경우 사용자 이름과 로그아웃 링크 출력 */}
      {status === "authenticated" && (
        <div>
          <span className="mr-2">Hello {session.user!.name}</span>
          <Link href="/api/auth/signout">Sign Out</Link>
        </div>
      )}
      {/* 인증되지 않은 경우 로그인 버튼 출력 */}
      {status === "unauthenticated" && (
        <Link href="/api/auth/signin">Google Login</Link>
      )}
    </div>
  );
};

export default NavBar;
