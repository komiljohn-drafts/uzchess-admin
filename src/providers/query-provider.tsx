import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactNode } from "react"

export function QueryProvider({ children }: { children: ReactNode }) {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
        retry: 1
      }
    }
  })
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}
