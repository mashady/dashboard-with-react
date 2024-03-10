import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./containers/Layout"
import Stats from "./pages/Stats"
import Users from "./pages/Users"

// styles
import "./App.css"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Settings from "./pages/Settings"
import Posts from "./pages/Posts"

const App = () => {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Stats />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/posts",
          element: <Posts />,
        },
        {
          path: "/settings",
          element: <Settings />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
    {
      element: <div>another route</div>,
      children: [
        {
          path: "another",
          element: <div>replace with component</div>,
        },
      ],
    },
  ])
  return <RouterProvider router={router} />
}

export default App
