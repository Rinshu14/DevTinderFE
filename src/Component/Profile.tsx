import InputBox from "../CustomComponents/InputBox"
import { useState } from "react"
import Button from "../CustomComponents/Button"
import { dark, light } from "../Utils/Constants"
import UserCard from "./UserCard"
import UseAppSelector from "../Hooks/UseAppSelector"
import { male, female, others, profile, updateProfile } from "../Utils/Constants"
import UseAppDispatch from "../Hooks/UseAppDispatch"
import { profileUpdate } from "../Services/UserAsync"


const Profile = () => {
  const [errorData, setError] = useState<string>("")
  const dispatch = UseAppDispatch()
  let user = UseAppSelector((state) => state.User.user)
  const [firstName, setFirstName] = useState<string>(user.firstName)
  const [lastName, setLastName] = useState<string>(user.lastName)
  const [age, setAge] = useState<number>(user.age ?? "")
  const [photoUrl, setPhotoUrl] = useState<string>(user.photoUrl ?? "")
  const [gender, setGender] = useState<string>(user.gender ?? "")
  const [about, setAbout] = useState<string>(user.about ?? "")
  const [file, setFile] = useState<File | null>(null)
  const [theme, setTheme] = useState<string>(user.theme)


  const handleFirstNameChange = (value: string | number) => {
    if (typeof value === 'string') {
      setFirstName(value)
    }
  }

  const handleLastNameChange = (value: string | number) => {
    if (typeof value === 'string') {
      setLastName(value)
    }
  }

  const handleAgeChange = (value: number | string) => {
    if (typeof value === 'number') {
      setAge(value)
    }
  }

  const handleFileChange = (e: any) => {
    let url = URL.createObjectURL(e.target.files[0])
    setFile(e.target.files[0])
    setPhotoUrl(url)
  }
  
  const updateClick = () => {
    let form = new FormData()
    form.append("theme", theme)
    form.append("firstName", firstName)
    form.append("lastName", lastName)
    form.append("about", about)
    form.append("gender", gender)
    form.append("age", age.toString())
    file && form.append("file", file)
    dispatch(profileUpdate(form))
  }


  return (
    <div className="w-full flex justify-evenly  ">
      <div className="card bg-base-300  shadow-xl  my-7  max-w-xl max-h-fit">
        <div className="card-body  text-center">
          
          <h1 className="text-3xl font-bold">{profile}</h1>
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
            <InputBox placeholder="Email" type="email" value={user.emailId} disabled readOnly />
            <input type="file" className="file-input file-input-bordered w-full max-w-xs ml-4" onChange={(e) => handleFileChange(e)} />
          </div>
          <textarea className="textarea textarea-bordered w-full resize-none " style={{ outline: "none" }} placeholder="About" value={about} onChange={(e) => { setAbout(e.target.value) }}></textarea>
          <select className="input select-bordered w-full max-w-xs   " style={{ outline: "none" }} onChange={(e) => setTheme(e.target.value)}>
            <option value="" hidden>Select an option</option>
            <option selected={theme === dark}>{dark}</option>
            <option selected={theme === light}>Light </option>
          </select>
          <p>{errorData}</p>
          <Button text={updateProfile} category={"primary"} onClick={updateClick} />
        </div>
      </div>
      <div className=" items-center flex ">

      <UserCard user={{ _id: user._id, firstName, lastName, age, about, gender, photoUrl }} />
      </div>
    </div>
  )
}


export default Profile
