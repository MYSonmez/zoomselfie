"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type AppLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  to: string;
  hash?: string;
  activeProps?: { className?: string };
  children?: ReactNode;
};

export function Link({ to, hash, activeProps, className, children, ...props }: AppLinkProps) {
  const pathname = usePathname();
  const active = to === "/" ? pathname === "/" : pathname === to || pathname.startsWith(`${to}/`);
  const href = hash ? `${to}#${hash}` : to;

  return (
    <NextLink href={href} className={cn(className, active && activeProps?.className)} {...props}>
      {children}
    </NextLink>
  );
}
