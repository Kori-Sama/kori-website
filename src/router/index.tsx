import { createBrowserRouter } from "react-router-dom"
import { lazy } from "react"
import Layout from "../pages/Layout"
import Login from "../pages/Login"
import Auth from "../components/Auth"

const Home = lazy(() => import("../pages/Home"))

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Auth>
        <Layout />
      </Auth>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
])

export default router
