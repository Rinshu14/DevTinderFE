import validator from 'validator'

const emailValidator = (email: string) => {
    return validator.isEmail(email)
}
const passwordValidator = (password:string) => {
    return validator.isStrongPassword(password, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1
    })
}

const usernameValidator = (username:string) => {
    return validator.isAlphanumeric(username)
}
export {emailValidator, passwordValidator,usernameValidator}