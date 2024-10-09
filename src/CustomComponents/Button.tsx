import  {ButtonHTMLAttributes,forwardRef} from 'react'
interface ButtonProps  extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

const Button =forwardRef<HTMLButtonElement,ButtonProps> (({text,...props},ref) => {
  return (
    <button ref={ref} {...props}  className="btn btn-active btn-primary ">{text}</button>
  )
})

export default Button