import { RouterProvider } from "react-router-dom"

import { ThemeProvider } from "./providers/theme-provider"
import router from "./router"

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
