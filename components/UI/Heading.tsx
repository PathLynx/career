// components/Heading.tsx
import clsx from "clsx"
import { ElementType } from "react"

interface HeadingProps {
  children: React.ReactNode
  as?: "h1" | "h2" | "h3"
  className?: string
}

export function Heading({ children, as = "h2", className }: HeadingProps) {
  const Component: ElementType = as

  const classes = clsx(
    "font-semibold",
    {
      "text-3xl": as === "h1",
      "text-2xl": as === "h2",
      "text-xl": as === "h3",
    },
    className
  )

  return <Component className={classes}>{children}</Component>
}
