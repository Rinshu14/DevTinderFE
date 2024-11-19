import validator from 'validator'
import { Gender } from "../Utils/Constants"

const emailValidator = (email: string) => {
    return validator.isEmail(email)
}
const passwordValidator = (password: string) => {
    return validator.isStrongPassword(password, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1
    })
}

const usernameValidator = (username: string) => {
    return validator.isAlphanumeric(username)
}

const ageValidator = (age: string) => {
    return (parseInt(age) < 18) ? false : true
}
function genderValidator(gender: string): boolean {
    return gender === Gender.male || gender === Gender.female || gender === Gender.others;
}

export { emailValidator, passwordValidator, usernameValidator, ageValidator, genderValidator }