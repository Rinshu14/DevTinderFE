import UseAppSelector from "../Hooks/UseAppSelector"
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import Black_Logout from "../Assests/logout.png"
import White_Logout from "../Assests/icons8-logout-100.png"
import NightThemeIcon from "../Assests/moon.png"
import LightThemeIcon from "../Assests/icons8-sun-100.png"
import UseAppDispatch from "../Hooks/UseAppDispatch"
import { setThemeInLocalStorage, getThemeFromLocalStorage } from "../Utils/LocalStorage"
import { logoutRequest } from "../Services/UserAsync"
import { ConnectionRequest, Connections, light, keyForThemeInLocalStorage } from "../Utils/Constants"
import { defaultUserImage } from "../Utils/Constants"
import { useState } from "react"

const Navbar = () => {

  const isLoggedIn = UseAppSelector((state) => state.User.isLoggedIn)
  const user = UseAppSelector((state) => state.User.user)
  const [theme, setTheme] = useState(user?.theme)

  const navigate = useNavigate()
  const dispatch = UseAppDispatch()


  let profileClick = () => {
    navigate("/profile")
  }
  const handleThemeClick = () => {
    let themeToSet = (theme) ? (theme == "dark" ? "cupcake" : "dark") : (getThemeFromLocalStorage(keyForThemeInLocalStorage) == "dark" ? "cupcake" : "dark")

    setThemeInLocalStorage(keyForThemeInLocalStorage, themeToSet)
    document.querySelector('body')?.setAttribute('data-theme', themeToSet);
    setTheme(themeToSet)
  }

  const handleLogoutClick = () => {
    dispatch(logoutRequest(user._id))
    navigate('/');
  }

  const connectionRequestClick = () => {
    navigate("/connectionRequest")
  }
  const connectionClick = () => {
    navigate("/connections")
  }

  return (
    <div className="navbar bg-base-200 h-[1rem]">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">DevTinder</Link>
      </div>

      <div className="flex-none gap-2">
        {(!isLoggedIn) && <div tabIndex={0} role="button" className="h-8 w-8 rounded-lg btn-circle btn-ghost  avatar ">
          <div className="w-7 rounded-full  ">
            <img src={(theme == "dark") ? LightThemeIcon : NightThemeIcon} alt="dark mode" style={{ color: "white" }} onClick={handleThemeClick} />

          </div>


        </div>}

        {(isLoggedIn) ? <p>Welcome {user.firstName}</p> : <></>}
        <div className="dropdown dropdown-end">
          <div tabIndex={1} role="button" className="btn btn-ghost btn-circle avatar ">
            <div className="w-10 rounded-full  ">
              <img
                alt="Tailwind CSS Navbar component"
                src={(user?.photoUrl) ? user?.photoUrl : defaultUserImage} />

            </div>


          </div>

          {isLoggedIn && <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <a className="justify-between" onClick={profileClick} >
                Profile

              </a>
            </li>
            <li><a onClick={connectionRequestClick}>{ConnectionRequest}</a></li>
            <li><a onClick={connectionClick}>{Connections}</a></li>
          </ul>}

        </div>
        {isLoggedIn &&
          <div tabIndex={0} role="button" className="h-8 w-8 rounded-lg btn-circle btn-ghost  avatar mr-6 ">
            <div className="w-7 rounded-full  ">
              <img src={(user.theme == light) ? Black_Logout : White_Logout} alt="Logout" onClick={handleLogoutClick} />

            </div>


          </div>}
      </div>
    </div>
  )
}

export default Navbar