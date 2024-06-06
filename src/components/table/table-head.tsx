import { ReactNode } from "react"

import { cn } from "@/lib/utils"

export function TableHead({
  children,
  className
}: {
  children: ReactNode
  className?: string
}) {
  return <thead className={cn(className)}>{children}</thead>
}
