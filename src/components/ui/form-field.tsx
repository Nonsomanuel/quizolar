import * as React from "react"
import { cn } from "@/lib/utils"

function FormField({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="form-field" className={cn("flex flex-col gap-2", className)} {...props} />
}

function FormLabel({ className, ...props }: React.ComponentProps<"label">) {
  return <label data-slot="form-label" className={cn("text-sm font-semibold text-foreground", className)} {...props} />
}

function FormDescription({ className, ...props }: React.ComponentProps<"p">) {
  return <p data-slot="form-description" className={cn("text-xs leading-5 text-muted-foreground", className)} {...props} />
}

function FormMessage({ className, ...props }: React.ComponentProps<"p">) {
  return <p data-slot="form-message" role="alert" className={cn("text-sm text-destructive", className)} {...props} />
}

export { FormField, FormLabel, FormDescription, FormMessage }
