import React from "react";
import UserTable from "./UserTable";

interface Props {
  searchParams: { sortOrder: string };
}

const UsersPage = ({ searchParams: { sortOrder } }: Props) => {
  return (
    <div>
      <div>This is UserPage</div>
      <p>{new Date().toLocaleTimeString()}</p>
      <UserTable sortOrder={sortOrder} />
    </div>
  );
};

export default UsersPage;
