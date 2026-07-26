import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
}

export function Logo({ className, iconOnly = false, size = "md" }: LogoProps) {
  const sizeMap = {
    sm: "text-lg",
    md: "text-xl sm:text-2xl",
    lg: "text-2xl sm:text-3xl",
    xl: "text-3xl sm:text-4xl",
  };

  return (
    <span className={cn(sizeMap[size], "font-extrabold tracking-tight select-none", className)}>
      <span className="text-primary">zoom</span>
      <span className="text-foreground">selfie</span>
    </span>
  );
}