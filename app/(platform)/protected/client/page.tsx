"use client";

import { UserButton, useAuth, useUser } from "@clerk/nextjs";

export default function ProtectedClientPage() {
  const { user } = useUser();
  const { userId } = useAuth();

  return (
    <div>
      <h1 className="text-3xl font-bold">Protected Client Page</h1>
      <p>useUser User: {user?.firstName}</p>
      <p>useAuth userId: {userId}</p>
      <UserButton />
    </div>
  );
}
