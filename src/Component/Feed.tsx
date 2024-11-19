
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

      {(feed.length>0) && <UserCard user={{firstName:feed[0].firstName,lastName:feed[0].lastName,_id:feed[0]._id,about:feed[0].about,gender:feed[0].gender,age:feed[0].age,photoUrl:feed[0].photo ,type:"feed"}} />}
      </div>
    </div>
  )
}

export default Feed