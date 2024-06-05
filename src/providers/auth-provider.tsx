import React, { useEffect, useMemo } from "react"

import { getStorageItem, setStorageItem } from "@/lib/storageUtils"

type IsAuthContextType = {
  isAuth: boolean
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
}

export const AuthContext = React.createContext<IsAuthContextType | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuth, setIsAuth] = React.useState(!!getStorageItem("isAuth"))

  const values = useMemo(() => ({ isAuth, setIsAuth }), [isAuth])

  useEffect(() => {
    setStorageItem("isAuth", isAuth)
  }, [isAuth])

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}
