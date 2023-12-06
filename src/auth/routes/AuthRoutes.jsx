import {Routes, Route} from "react-router-dom"
import {LoginPage, RegisterPage} from "../pages"


export const AuthRoutes = () => {
  return (
    <Routes>
        {/* Login Registro*/}
        <Route path="login" element={<LoginPage/>}/>
        <Route path="register" element={<RegisterPage/>}/>
    </Routes> 
  )
}
