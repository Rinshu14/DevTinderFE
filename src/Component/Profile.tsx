import InputBox from "../CustomComponents/InputBox"
import { useState } from "react"
import Button from "../CustomComponents/Button"

import UserCard from "./UserCard"
import UseAppSelector from "../Hooks/UseAppSelector"
import { male, female, others, profile, updateProfile } from "../Utils/Constants"
import UseAppDispatch from "../Hooks/UseAppDispatch"
import { profileUpdate } from "../Services/UserAsync"
import { User } from "../Types/User"




const Profile = () => {
  const [errorData, setError] = useState<string>("")
  const dispatch = UseAppDispatch()

  let user = UseAppSelector((state) => state.User.user)


  const [firstName, setFirstName] = useState<string>(user.firstName)
  const [lastName, setLastName] = useState<string>(user.lastName)
  const [email, setEmail] = useState<string>(user.emailId)
  const [age, setAge] = useState<number | "">(user.age)
  const [photo, setPhoto] = useState<string>(user.photo ?? "")
  const [gender, setGender] = useState<string>(user.gender ?? "")
  const [about, setAbout] = useState<string>(user.about ?? "")


  

  const handleFirstNameChange = (value: string) => {

    if (typeof value === 'string') {
      setFirstName(value)
    }
  }
  const handleLastNameChange = (value: string) => {
    if (typeof value === 'string') {
      setLastName(value)
    }

  }
  const handleAgeChange = (value: number) => {
    let val = parseInt(value)
    if (typeof val === 'number') {
      setAge(val)
    }

  }

  const updateClick = () => {
    let data = {} as User;
    firstName && (data.firstName = firstName)
    lastName && (data.lastName = lastName)
    about && (data.about = about)
    gender && (data.gender = gender)
    age && (data.age = age)
    dispatch(profileUpdate(data))
  }


  return (

    <div className="flex justify-evenly ">

      <div className="card bg-base-300  shadow-xl  my-12  max-w-xl max-h-fit">

        <div className="card-body  text-center">
          <h2 className="mb-2 font-semibold text-left text-lg">{profile}</h2>
          <div className="flex">
            <InputBox placeholder="First Name" type="text" value={firstName} onInputChange={handleFirstNameChange} />
            <InputBox placeholder="Last Name" type="text" styles={"ml-4"} value={lastName} onInputChange={handleLastNameChange} />
          </div>
          <div className="flex">
            <InputBox placeholder="Age" type="number" value={age} onInputChange={handleAgeChange} />
            <select className="input select-bordered w-full max-w-xs  ml-4 " style={{ outline: "none" }} onChange={(e) => setGender(e.target.value)}>
              <option value="" hidden>Select an option</option>
              <option selected={gender === male}>{male}</option>
              <option selected={gender === female}>{female} </option>
              <option selected={gender === others}>{others}</option>
            </select>
          </div>
          <div className="flex">
            <InputBox placeholder="Email" type="email" value={email} disabled readOnly/>
            <input type="file" className="file-input file-input-bordered w-full max-w-xs ml-4" value={photo} />
          </div>
          <textarea className="textarea textarea-bordered w-full resize-none " style={{ outline: "none" }} placeholder="About" value={about} onChange={(e) => { setAbout(e.target.value) }}></textarea>
          <p>{errorData}</p>
          <Button text={updateProfile} category={"primary"} onClick={updateClick} />

        </div>
      </div>

      <UserCard user={{ firstName, lastName, age, about, gender, photo }} />
    </div>
  )
}


export default Profile
