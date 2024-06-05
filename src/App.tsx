import { Toaster } from "react-hot-toast"
import { RouterProvider } from "react-router-dom"

import { QueryProvider } from "./providers/query-provider"
import { ThemeProvider } from "./providers/theme-provider"
import router from "./router"

function App() {
  return (
    <QueryProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
        <Toaster />
      </ThemeProvider>
    </QueryProvider>
  )
}

export default App
