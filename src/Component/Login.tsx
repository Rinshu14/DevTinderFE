import loginRequest from "../Types/InputBoxPropsTypes"
import UseAppDispatch from "../Hooks/UseAppDispatch"


const Login = () => {
  const dispatch = UseAppDispatch()
  const login = () => {
    dispatch(loginRequest("hii"))
  }

  return (
    <div>
      <button onClick={login}>Login</button>
    </div>
  )
}

export default Login