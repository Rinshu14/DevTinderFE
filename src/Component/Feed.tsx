
import UseAppDispatch from "../Hooks/UseAppDispatch";
import { getFeed } from "../Services/FeedAsync"
import { useEffect } from "react";
import UserCard from "./UserCard";
import UseAppSelector from "../Hooks/UseAppSelector";



const Feed = () => {

const feed=UseAppSelector((state)=>state.Feed.feed)

  
const dispatch = UseAppDispatch()
  useEffect(()=>{
dispatch(getFeed())
  },[])

 

  return (
    <div>
    
      <div className="flex justify-center">

      {feed && <UserCard user={feed[0]} />}
      </div>
    </div>
  )
}

export default Feed