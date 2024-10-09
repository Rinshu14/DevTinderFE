import PrivateRoute from "./Routes/PrivateRoute"
import PublicRoutes from './Routes/PublicRoutes'
import { useSelector } from "react-redux"
import { RootState } from "./Store/Store"

function App() {
 //const isLogin = useSelector((state: RootState) => state.User.user.isLoggedIn)
  const isLogin = true
  return (
    <>
      {isLogin ? <PrivateRoute /> : <PublicRoutes />}
    </>
  )
}

export default App
