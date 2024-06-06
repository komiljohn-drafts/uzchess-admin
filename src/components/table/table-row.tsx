import { ReactNode } from "react"

import { cn } from "@/lib/utils"

export function TableRow({
  children,
  className
}: {
  children: ReactNode
  className?: string
}) {
  return <tr className={cn(className)}>{children}</tr>
}
