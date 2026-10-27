import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all outline-none focus-visible:ring-4 focus-visible:ring-ring/20 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90",
        gradient: "bg-linear-to-r from-blue-700 to-purple-800 text-white shadow-lg shadow-violet-600/20 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-600/25",
        outline: "border border-input bg-background hover:border-primary/30 hover:bg-accent",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "min-h-11 px-5 py-3",
        sm: "min-h-9 rounded-lg px-3.5 py-2 text-xs",
        lg: "min-h-12 rounded-xl px-6 py-3.5",
        icon: "size-10",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
)

function Button({ className, variant, size, ...props }: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {
  return <button data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />
}

export { Button, buttonVariants }
