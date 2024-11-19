

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthenticationForm from '../Component/AuthenticationForm'
import PublicBody from '../Component/PublicBody'
import {login,signUp} from "../Utils/Constants"


const PublicRoutes = () => {
  console.log("PublicRoutes")
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <PublicBody />,
      children: [{
        path: '/',
        element: <AuthenticationForm formType={login}/>
      },
      {
        path: '/signup',
        element: <AuthenticationForm formType={signUp}/>
      },
      {
        path: '*',
        element: <AuthenticationForm formType={login} />
      }
      ]
    }
  ])
  return (
    <RouterProvider router={appRouter} />
  )
}

export default PublicRoutes