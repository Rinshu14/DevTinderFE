

import  UseAppDispatch  from "../Hooks/UseAppDispatch";
import UseAppSelector from "../Hooks/UseAppSelector";

import { setUser } from "../Store/Slices/User";

const Feed = () => {
 
  const dispatch = UseAppDispatch();
  const userName=UseAppSelector((state)=>state.User?.user?.firstName)
// console.log(userName)
  const handleClick = () => {
    // dispatch(setUser({
    //   isLoggedIn:true,
    //   firstName: "Rinshu",
    //   lastName: "Rajput",
    //   email: "Rinshu@gmail.com",
    // }))
  }

  return (
    <div>Feed
     <p>{userName}</p>
      <button onClick={handleClick}>click</button>
    </div>
  )
}

export default Feed