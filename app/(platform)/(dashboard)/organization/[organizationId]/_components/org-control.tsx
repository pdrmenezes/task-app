"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useOrganizationList } from "@clerk/nextjs";

export function OrgControl() {
  const { organizationId } = useParams();
  const { setActive } = useOrganizationList();

  useEffect(() => {
    if (!setActive) return;
    setActive({ organization: organizationId as string });
  }, [setActive, organizationId]);

  return null;
}
