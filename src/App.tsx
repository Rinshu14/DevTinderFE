import PrivateRoute from "./Routes/PrivateRoute"
import PublicRoutes from './Routes/PublicRoutes'
import { useEffect } from "react"
import UseAppSelector from "./Hooks/UseAppSelector"
import UseAppDispatch from "./Hooks/UseAppDispatch"
import { profileView } from "./Services/UserAsync"
import { light, keyForThemeInLocalStorage } from "./Utils/Constants"
import { getThemeFromLocalStorage } from "./Utils/LocalStorage"
import { useNavigate } from "react-router-dom"

function App() {

  const theme = UseAppSelector((state) => state.User?.user?.theme) || (getThemeFromLocalStorage(keyForThemeInLocalStorage) || light)
  const isLogin = UseAppSelector((state) => state.User.isLoggedIn)
  const dispatch = UseAppDispatch()
//  const navigate=useNavigate()

  useEffect(() => {
    document.querySelector('body')?.setAttribute('data-theme', theme);
  }, [theme])
  
  useEffect(() => {
   // isLogin && navigate("/")
   dispatch(profileView())

  }, [])

  return (
    <>
      {isLogin ? <PrivateRoute /> : <PublicRoutes />}
    </>

  )


}


export default App
