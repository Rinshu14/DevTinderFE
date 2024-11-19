import { loginRequest,signupRequest } from "../Services/UserAsync"
import UseAppDispatch from "../Hooks/UseAppDispatch"
import UseAppSelector from "../Hooks/UseAppSelector"
import { useRef, useState } from "react"
import InputBox from "../CustomComponents/InputBox"
import Button from "../CustomComponents/Button"
import { emailValidator, passwordValidator, usernameValidator, ageValidator,genderValidator } from "../Validators/Validations"
import { login, signUp,male,female,others } from "../Utils/Constants"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"


type AuthenticationFormProps = {
  formType: string
}

const AuthenticationForm = ({ formType }: AuthenticationFormProps) => {

  const dispatch = UseAppDispatch()
  const navigate = useNavigate()
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const firstNameRef = useRef<HTMLInputElement>(null)
  const ageRef = useRef<HTMLInputElement>(null)
  const genderRef = useRef<HTMLSelectElement>(null)


  // const isLoggedIn=UseAppSelector((state)=>state.User.isLoggedIn)

  const message = (formType == login) ? "New User? " : "Already have an acount ? "

  const [errordata, setErrorData] = useState<string>("")




  // useEffect(() => {
  //   if (isLoggedIn) {
  //     navigate('/');
  //   }
  // }, [isLoggedIn]);


  const AuthenticationFormClick = () => {

    if (formType == login) {
      if (emailRef.current && passwordRef.current ) {
        if (emailValidator(emailRef.current.value) && passwordValidator(passwordRef.current.value)) {
          setErrorData("")
          dispatch(loginRequest({ emailId: emailRef.current.value, password: passwordRef.current.value }))
        }
        else setErrorData("Invalid Details")

      }
    }
    else{
      if (emailRef.current && passwordRef.current && firstNameRef.current && ageRef.current && genderRef.current) {
        if (emailValidator(emailRef.current.value) && passwordValidator(passwordRef.current.value) && ageValidator(ageRef.current.value) && usernameValidator(firstNameRef.current.value) && genderValidator(genderRef.current.value)) {
          setErrorData("")
          dispatch(signupRequest({ emailId: emailRef.current.value, password: passwordRef.current.value,age:parseInt(ageRef.current.value),firstName:firstNameRef.current.value }))
        }
        else setErrorData("Invalid Details")

      }
    }

  }

  const navigateToOther = () => {
    (formType == login) ? navigate("/signup") : navigate("/")
  }




  return (
    <div className="card bg-base-300 w-96 shadow-xl m-auto  ">
      <div className="card-body items-center text-center ">
        <>
          <InputBox placeholder="Email" type="email" validate={emailValidator} ref={emailRef} />
          <InputBox placeholder="Password" type="password" validate={passwordValidator} ref={passwordRef} />
        </>

        {(formType == signUp) && <>
          <InputBox placeholder="First Name" type="text" validate={usernameValidator} ref={firstNameRef} />
          <InputBox placeholder="Age" type="number" validate={ageValidator} ref={ageRef} />
          <select className="input select-bordered w-full max-w-xs" style={{ outline: "none" }}  ref={genderRef}>
              <option value="" hidden>Select your gender</option>
              <option >{male}</option>
              <option >{female} </option>
              <option >{others}</option>
            </select>
        </>}

        <label>{message}  <span className="underline cursor-pointer" onClick={navigateToOther}>{(formType == login) ? signUp : login} </span></label>
        <p>{errordata}</p>

        <Button text={(formType == login) ? login : signUp} category={"primary"} onClick={AuthenticationFormClick} />
      </div>
    </div>
  )
}

export default AuthenticationForm