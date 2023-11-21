import { OrganizationSwitcher, auth } from "@clerk/nextjs";

export default function OrganizationIdPage({ params }: { params: { organizationId: string } }) {
  const { userId, orgId } = auth();

  return (
    <div className="flex flex-col items-center">
      <OrganizationSwitcher hidePersonal />
      <h1 className="text-3xl font-bold">Organization Page </h1>
      <div className="flex flex-col">
        <p>Route Params Org Id: {params.organizationId}</p>
        <p>Auth Org Id: {orgId}</p>
        <p>Auth User Id: {userId} </p>
      </div>
    </div>
  );
}
