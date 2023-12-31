import React from "react";
import Link from "next/link";
import UserTable from "./UserTable";

interface Props {
  searchParams: { sortOrder: string };
}

const UsersPage = ({ searchParams: { sortOrder } }: Props) => {
  return (
    <div>
      <div>This is UserPage</div>
      <Link href="/users/new" className="btn btn-primary">
        New user
      </Link>
      <p>{new Date().toLocaleTimeString()}</p>
      <UserTable sortOrder={sortOrder} />
    </div>
  );
};

export default UsersPage;
