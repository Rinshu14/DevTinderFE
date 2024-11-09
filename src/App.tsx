import PrivateRoute from "./Routes/PrivateRoute"
import PublicRoutes from './Routes/PublicRoutes'
import { useEffect } from "react"
import UseAppSelector from "./Hooks/UseAppSelector"
import UseAppDispatch from "./Hooks/UseAppDispatch"
import { profileView } from "./Services/UserAsync"

function App() {

  const theme = UseAppSelector((state) => state.User?.user?.theme) || "cupcake"

  const isLogin = UseAppSelector((state) => state.User.isLoggedIn)
  const dispatch = UseAppDispatch()

  useEffect(() => {
    document.querySelector('body')?.setAttribute('data-theme', theme);
  }, [theme])
  useEffect(() => {
    dispatch(profileView())
  }, [])

  return (
    <>
      {isLogin ? <PrivateRoute /> : <PublicRoutes />}
    </>

  )


}


export default App
