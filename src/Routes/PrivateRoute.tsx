
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Body from '../Component/Body'
import Feed from '../Component/Feed'
import ErrorElement from '../Component/ErrorElement'
import Profile from '../Component/Profile'


const PrivateRoute = () => {
  console.log("PrivateRoute")
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Body />,
      errorElement: <ErrorElement />,
      children: [{
        path: "/",
        element: <Feed />
      },
      {
        path:"/Profile",
        element:<Profile/>
      },
      {
        path: "*",
        element: <Navigate to="/login" />
      }
      ]
    }
  ])
  return (
    <RouterProvider router={appRouter} />
  )
}

export default PrivateRoute
