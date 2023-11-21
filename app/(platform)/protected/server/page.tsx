import { UserButton, auth, currentUser } from "@clerk/nextjs";

export default async function ProtectedServerPage() {
  const user = await currentUser();
  const { userId, user: authUser } = auth();

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <UserButton afterSignOutUrl="/" />
      <h1 className="text-3xl font-bold">Protected Server Page</h1>
      <div className="flex flex-col">
        <p>User: {user?.firstName}</p>
        <p>UserId: {userId}</p>
        <p>authUser: {authUser?.firstName}</p>
      </div>
    </div>
  );
}
