import {loginRequest} from "../Services/UserAsync"
import UseAppDispatch from "../Hooks/UseAppDispatch"
import { useRef, useState } from "react"
import InputBox from "../CustomComponents/InputBox"
import Button from "../CustomComponents/Button"
import { emailValidator, passwordValidator } from "../Validators/Validations"


const Login = () => {
  const dispatch = UseAppDispatch()
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const [errordata, setErrorData] = useState<string>("")
  const loginClick = () => {


    if (emailRef.current && passwordRef.current) {
      if (emailValidator(emailRef.current.value) && passwordValidator(passwordRef.current.value)) {
        setErrorData("")
        dispatch(loginRequest({ emailId: emailRef.current.value, password: passwordRef.current.value }))
      }
      else setErrorData("Invalid Details")

    }

  }


  return (
    <div className="card bg-base-300 w-96 shadow-xl m-auto my-28 ">
      <div className="card-body items-center text-center">
        <InputBox placeholder="Email" type="email" validate={emailValidator} ref={emailRef} />
        <InputBox placeholder="Password" type="password" validate={passwordValidator} ref={passwordRef} />
        <label>Already have an account | <span className="underline cursor-pointer">Log in</span></label>
        <p>{errordata}</p>
        <Button text="SIGN UP" category={"primary"}onClick={loginClick} />
      </div>
    </div>
  )
}

export default Login