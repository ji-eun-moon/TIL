import React from "react";

interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    // next: { revalidate: 10 },  // 캐싱을 특정 시간 동안만 유지하고, 그 이후에는 다시 요청을 보내 최신 버전을 캐싱
    cache: "no-store",
  });
  const users: User[] = await res.json();

  return (
    <div>
      <div>This is UserPage</div>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
