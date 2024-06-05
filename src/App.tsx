import { Toaster } from "react-hot-toast"

import { AuthProvider } from "./providers/auth-provider"
import { QueryProvider } from "./providers/query-provider"
import { ThemeProvider } from "./providers/theme-provider"
import Routers from "./router"

function App() {
  return (
    <QueryProvider>
      <ThemeProvider>
        <AuthProvider>
          <Routers />
        </AuthProvider>
        <Toaster />
      </ThemeProvider>
    </QueryProvider>
  )
}

export default App
