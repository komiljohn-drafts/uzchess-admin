import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom"

import AuthPage from "../pages/AuthPage"
import CoursesPage from "../pages/CoursesPage"
import HomePage from "../pages/HomePage"
import NotFoundPage from "../pages/NotFoundPage"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<NotFoundPage />}>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/courses" element={<CoursesPage />} />
    </Route>
  )
)

export default router
