
import SignUpForm from '../Component/SignUpForm'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from '../Component/Login'
import PublicBody from '../Component/PublicBody'


const PublicRoutes = () => {
  console.log("PublicRoutes")
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <PublicBody />,
      children: [{
        path: '/',
        element: <Login />
      },
      {
        path: '/signup',
        element: <SignUpForm />
      },
      {
        path: '*',
        element: <Login />
      }
      ]
    }
  ])
  return (
    <RouterProvider router={appRouter} />
  )
}

export default PublicRoutes