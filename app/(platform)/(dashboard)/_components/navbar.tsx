import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Plus } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 z-10 flex h-14 w-full items-center border-b bg-white px-4 shadow-sm">
      <div className="flex items-center gap-x-4">
        <div className="hidden md:flex">
          <Logo />
        </div>
        <Button size="sm" className="hidden h-auto rounded-sm px-2 py-1.5 md:block">
          Create
        </Button>
        <Button size="sm" className="block h-auto rounded-sm px-2 py-1.5 md:hidden">
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <div className="ml flex items-center gap-x-2">
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl="/organization/:id"
          afterSelectOrganizationUrl="/organization/:id"
          afterLeaveOrganizationUrl="/select-org"
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            },
          }}
        />
        <UserButton afterSignOutUrl="/" appearance={{ elements: { avatarBox: { height: 30, width: 30 } } }} />
      </div>
    </nav>
  );
}
