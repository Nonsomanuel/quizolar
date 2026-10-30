import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

type BadgeProps = HTMLAttributes<HTMLSpanElement> & { variant?: "default" | "secondary" }

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return <span className={cn("inline-flex w-fit items-center rounded-full px-2.5 py-1 text-xs font-semibold", variant === "default" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground", className)} {...props} />
}
