
import { createBrowserRouter, Navigate,RouterProvider } from 'react-router-dom'
import Body from '../Component/Body'
import Feed from '../Component/Feed'
import ErrorElement from '../Component/ErrorElement'


const PrivateRoute = () => {
  console.log("PrivateRoute")
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Body />,
      errorElement: <ErrorElement />,
      children: [{
        path: "/feed",
        element: <Feed />
      },
      {
        path:"*",
        element:<Navigate to="/login" />

      }
      ]


    }
  ])
  return (
  
    <RouterProvider router={appRouter} />
    
  )
}

export default PrivateRoute
