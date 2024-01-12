"use client";

import Link from "next/link";
import { Plus } from "lucide-react";
import { useLocalStorage } from "usehooks-ts";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Accordion } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

interface SidebarProps {
  storageKey?: string;
}

export function Sidebar({ storageKey = "t-sidebar-state" }: SidebarProps) {
  // save the accordion behavior on localStorage to keep its behavior consistent and avoid it colapsing on each page rerender
  const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(storageKey, {});
  const { organization: activeOrganization, isLoaded: isLoadedOrganization } = useOrganization();
  const { userMemberships, isLoaded: isLoadedOrganizationList } = useOrganizationList({
    userMemberships: { infinite: true },
  });
  // we'll transform our object held on the localStorage with id and status of expanded to an array of ids for the accordion
  // object on local storage has the id of the accordion item and a boolean that represents if it is expanded or not and looks like: { "accordionItemId1": true, "accordionItemId2": false  ... }
  // the array we'll transform to will only contain the accordion item's ids: [ "accordionItemId1", "accordionItemId2" ]
  // in the reduce method, for each item inside our expanded object saved on the local storage, we'll add their respective keys (ids) as the Accordion's defaultValue, and also pass a default value for the reduce method of an empty array []
  const defaultAccordionValue: string[] = Object.keys(expanded).reduce((accumulator: string[], key: string) => {
    if (expanded[key]) {
      accumulator.push(key);
    }
    return accumulator;
  }, []);

  // every time we click on an accordion item, we'll invert its saved state (if it was expanded, invert it and vice-versa)
  const handleAccordionBehavior = (id: string) => {
    setExpanded((currentValue) => ({ ...currentValue, [id]: !expanded[id] }));
  };

  // if any information is loading, load the skeleton // could also be handled using the 'loading.tsx' reserved next file
  if (!isLoadedOrganization || !isLoadedOrganizationList || userMemberships.isLoading) {
    return (
      <>
        <Skeleton />
      </>
    );
  }

  return (
    <>
      <div className="mb-1 flex items-center text-xs font-medium">
        <span className="pl-4">Workspaces</span>
        <Button asChild type="button" size="icon" variant="ghost" className="ml-auto">
          <Link href="/select-org">
            <Plus className="2-4 h-4" />
          </Link>
        </Button>
      </div>
      <Accordion type="multiple" defaultValue={defaultAccordionValue}></Accordion>
    </>
  );
}
