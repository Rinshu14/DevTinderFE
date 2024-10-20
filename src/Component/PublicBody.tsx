
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const PublicBody = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>

  
    </>
  )
}

export default PublicBody