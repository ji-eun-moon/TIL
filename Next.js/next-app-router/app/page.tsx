import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <h1>{session && <span>{session.user!.name}님</span>} 반갑습니다.</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  );
}
