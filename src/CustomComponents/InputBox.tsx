
import { forwardRef, InputHTMLAttributes, useState } from "react"
interface InputBoxProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string
    type: string
    validate?: (value: string) => boolean
}



const InputBox = forwardRef<HTMLInputElement, InputBoxProps>(({ placeholder, type, validate,...props }: InputBoxProps, ref) => {
    const [error, setError] = useState<boolean>(false)
  

    return (
        <input type={type} placeholder={placeholder} ref={ref} {...props} onChange={(e) => {if(validate)setError(!validate(e.target.value))}} className={`input input-bordered w-full max-w-xs  ${error ? "input-error" : ""} `} style={{outline:"none"}} />
    )
})

export default InputBox