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
  const handleClick: AnchorHTMLAttributes<HTMLAnchorElement>["onClick"] = (event) => {
    props.onClick?.(event);
    if (event.defaultPrevented || hash) return;

    const root = document.documentElement;
    const previousBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    if (pathname === to) window.scrollTo(0, 0);

    // Keep native/Next.js scroll restoration instant throughout the route swap.
    // Delaying the reset avoids exposing the previous page while it scrolls away.
    window.setTimeout(() => {
      root.style.scrollBehavior = previousBehavior;
    }, 900);
  };

  return (
    <NextLink href={href} className={cn(className, active && activeProps?.className)} {...props} onClick={handleClick}>
      {children}
    </NextLink>
  );
}
