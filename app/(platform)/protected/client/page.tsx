"use client";

import { UserButton, useAuth, useUser } from "@clerk/nextjs";

export default function ProtectedClientPage() {
  const { user } = useUser();
  const { userId } = useAuth();

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <UserButton afterSignOutUrl="/" />
      <h1 className="text-3xl font-bold">Protected Client Page</h1>
      <div className="flex flex-col">
        <p>useUser User: {user?.firstName}</p>
        <p>useAuth userId: {userId}</p>
      </div>
    </div>
  );
}
