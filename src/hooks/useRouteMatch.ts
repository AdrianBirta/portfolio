"use client"
import { usePathname } from "next/navigation";

export function useRouteMatch(target: string) {
  const pathname = usePathname().replace("/", "");

  return pathname === target;
}
