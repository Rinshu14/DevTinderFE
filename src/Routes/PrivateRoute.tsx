
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Body from '../Component/Body'
import Feed from '../Component/Feed'
import ErrorElement from '../Component/ErrorElement'
import Profile from '../Component/Profile'
import ConnectionList from '../Component/ConnectionRequestList'
import ConnectionsList from '../Component/ConnectionsList'


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
        path:"/connections",
        element:<ConnectionsList/>
      },
      {
        path:"/connectionRequest",
        element:<ConnectionList/>
      },
      {
        path: "*",
        element: <Navigate to="/" />
      }
      ]
    }
  ])
  return (
    <RouterProvider router={appRouter} />
  )
}

export default PrivateRoute
