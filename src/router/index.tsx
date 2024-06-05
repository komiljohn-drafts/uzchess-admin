import { useContext } from "react"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider
} from "react-router-dom"

import { MainLayout } from "@/layouts/MainLayout"
import { menuItems } from "@/lib/menuItems"
import { AuthContext } from "@/providers/auth-provider"

import AuthPage from "../pages/AuthPage"
import CoursesPage from "../pages/CoursesPage"
import NotFoundPage from "../pages/NotFoundPage"

function Routers() {
  const values = useContext(AuthContext)

  const router = createBrowserRouter(
    createRoutesFromElements(
      !values?.isAuth ? (
        <Route>
          <Route path="/login" element={<AuthPage />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Route>
      ) : (
        <Route element={<MainLayout />} errorElement={<NotFoundPage />}>
          {menuItems.map((item) => (
            <Route key={item.id} path={item.path} element={<CoursesPage />} />
          ))}
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      )
    )
  )

  return <RouterProvider router={router} />
}

export default Routers
