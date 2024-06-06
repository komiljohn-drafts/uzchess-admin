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
import HomePage from "@/pages/HomePage"
import { AuthContext } from "@/providers/auth-provider"

import CoursesPage from "../pages/CoursesPage"
import ErrorPage from "../pages/ErrorPage"
import LoginPage from "../pages/LoginPage"

function Routers() {
  const values = useContext(AuthContext)

  const router = createBrowserRouter(
    createRoutesFromElements(
      !values?.isAuth ? (
        <Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Route>
      ) : (
        <Route element={<MainLayout />} errorElement={<ErrorPage />}>
          <Route path="/" element={<HomePage />} />
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
