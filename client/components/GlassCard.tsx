import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "light" | "dark" | "green";
  hoverable?: boolean;
  children: React.ReactNode;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  variant = "light",
  hoverable = false,
  className,
  children,
  ...props
}) => {
  const variantClasses = {
    light:
      "bg-white/70 backdrop-blur-md border border-white/50 hover:bg-white/80",
    dark: "bg-green-900/50 backdrop-blur-md border border-green-700/30 hover:bg-green-900/60",
    green:
      "bg-green-50/70 backdrop-blur-md border border-green-200/50 hover:bg-green-50/80",
  };

  const hoverClass = hoverable
    ? "transition-all hover:shadow-xl hover:-translate-y-1"
    : "";

  return (
    <div
      className={cn(
        "rounded-3xl p-8 md:p-10 shadow-lg",
        variantClasses[variant],
        hoverClass,
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
