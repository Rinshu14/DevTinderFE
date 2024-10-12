// import React from 'react'
import { useRef, useState } from "react"
import InputBox from "../CustomComponents/InputBox"
import Button from "../CustomComponents/Button"
import { emailValidator, passwordValidator, usernameValidator } from "../Validators/Validations"


const SignUpForm = () => {

    const emailRef = useRef<HTMLInputElement>(null)
    const userNameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const [errordata, setErrorData] = useState<string>("")


    const signUpClick = (): void => {

        if (emailRef.current && userNameRef.current && passwordRef.current) {
            if (emailValidator(emailRef.current.value) && usernameValidator(userNameRef.current.value) && passwordValidator(passwordRef.current.value)) {
                setErrorData("")
                alert("Button Clicked");
            }
            else setErrorData("Invalid Details")

        }
    }

    return (

        <div className="card bg-base-300 w-96 shadow-xl m-auto my-20 ">

            <div className="card-body items-center text-center">
                <InputBox placeholder="UserName" type="text" validate={usernameValidator} ref={userNameRef} />
                <InputBox placeholder="Email" type="email" validate={emailValidator} ref={emailRef} />
                <InputBox placeholder="Password" type="password" validate={passwordValidator} ref={passwordRef} />
                <label>Already have an account | <span className="underline cursor-pointer">Log in</span></label>
                <p>{errordata}</p>
                <Button text="SIGN UP" onClick={signUpClick} />
            </div>
        </div>
    )
}

export default SignUpForm