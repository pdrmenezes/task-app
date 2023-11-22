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
  // for each item inside our expanded items list saved on the local storage, we'll add their keys to the default accordion state, passing it a default value of []
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

  return <div>sidebar</div>;
}
