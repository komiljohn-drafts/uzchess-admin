import React, { useEffect, useMemo } from "react"

import { getStorageItem, setStorageItem } from "@/lib/storageUtils"

type SidebarContextType = {
  isExpanded: boolean
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>
}

export const SidebarContext = React.createContext<SidebarContextType | null>(
  null
)

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isExpanded, setIsExpanded] = React.useState(
    !!getStorageItem("isSidebar")
  )

  const values = useMemo(() => ({ isExpanded, setIsExpanded }), [isExpanded])

  useEffect(() => {
    setStorageItem("isSidebar", isExpanded)
  }, [isExpanded])

  return (
    <SidebarContext.Provider value={values}>{children}</SidebarContext.Provider>
  )
}
