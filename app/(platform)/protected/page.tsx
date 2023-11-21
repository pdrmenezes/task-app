import { auth, currentUser } from "@clerk/nextjs";

export default async function ProtectedPage() {
  const user = await currentUser();
  const { userId, user: authUser } = auth();

  return (
    <div>
      <h1 className="text-3xl font-bold">Protected Page</h1>
      <p>User: {user?.firstName}</p>
      <p>UserId: {userId}</p>
      <p>authUser: {authUser?.lastName}</p>
    </div>
  );
}
