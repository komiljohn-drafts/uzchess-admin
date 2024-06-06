import { ReactNode } from "react"

import { cn } from "@/lib/utils"

export function TableHeadCell({
  style,
  children,
  className
}: {
  style?: React.CSSProperties
  children: ReactNode
  className?: string
}) {
  return (
    <th style={style} className={cn(className)}>
      {children}
    </th>
  )
}
