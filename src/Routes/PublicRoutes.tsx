
import SignUpForm from '../Component/SignUpForm'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Login from '../Component/Login'


const PublicRoutes = () => {
  console.log("PublicRoutes")
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUpForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default PublicRoutes