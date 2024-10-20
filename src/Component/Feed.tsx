


import UseAppSelector from "../Hooks/UseAppSelector";



const Feed = () => {
 

  const userName=UseAppSelector((state)=>state.User?.user?.firstName)

  const handleClick = () => {
    
  }

  return (
    <div>Feed
     <p>{userName}</p>
      <button onClick={handleClick}>click</button>
    </div>
  )
}

export default Feed