import UseAppSelector from "../Hooks/UseAppSelector"
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import NightIcon from "../Assests/night-mode.svg"
import LightIcon from "../Assests/Sun.png"
import UseAppDispatch from "../Hooks/UseAppDispatch"
import { setTheme } from "../Store/Slices/User"

const Navbar = () => {

  let user = UseAppSelector((state) => state.User.user)
  let theme=user?.theme
  const navigate = useNavigate()
  const dispatch = UseAppDispatch()
  let profileClick = () => {
    navigate("/profile")
  }
  const handleThemeClick=()=>{

    dispatch(setTheme(theme=="dark"?"cupcake":"dark"))
  }
  return (
    <div className="navbar bg-base-200">
      <div className="flex-1">

        <Link to="/" className="btn btn-ghost text-xl">DevTinder</Link>
      </div>
      <div className="flex-none gap-2">
        <div tabIndex={0} role="button" className="h-8 w-8 rounded-lg btn-circle btn-ghost  avatar ">
          <div className="w-7 rounded-full  ">
            <img src={(theme=="dark")?LightIcon:NightIcon} alt="dark mode" style={{color:"white"}} onClick={handleThemeClick}/>

          </div>


        </div>
       
        {(user) ? <p>Welcome {user.firstName}</p> : <></>}
        <div className="dropdown dropdown-end mr-6">
          <div tabIndex={1} role="button" className="btn btn-ghost btn-circle avatar ">
            <div className="w-10 rounded-full  ">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                onClick={profileClick} />

            </div>


          </div>

          {/* <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <a className="justify-between">
                Profile
              
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul> */}

        </div>

      </div>
    </div>
  )
}

export default Navbar