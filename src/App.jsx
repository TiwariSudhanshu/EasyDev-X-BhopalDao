import SignupPage from './signupPage'
import './index.css'
import { Routes, Route } from 'react-router-dom'
import DashboardLayout from "../src/student/dashboard"
import LoginPage from './loginPage'
function App() {

  return (
    <>
     <Routes>
      <Route path='/register' element={<SignupPage/>}/>
      <Route path='/' element={<LoginPage/>}/>
      
      <Route path='/studentdash' element={<DashboardLayout/>}/>
     </Routes>
    </>
  )
}

export default App
