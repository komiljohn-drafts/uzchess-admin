import { ReactNode } from "react"

import { cn } from "@/lib/utils"

export function TableBodyCell({
  style,
  children,
  className
}: {
  style?: React.CSSProperties
  children: ReactNode
  className?: string
}) {
  return (
    <td style={style} className={cn(className)}>
      {children}
    </td>
  )
}
