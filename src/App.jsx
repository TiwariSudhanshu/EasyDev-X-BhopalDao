import SignupPage from './signupPage'
import './index.css'
import { Routes, Route } from 'react-router-dom'
import DashboardLayout from "./dashboard/dashboard"
import LoginPage from './loginPage'
function App() {

  return (
    <>
     <Routes>
      <Route path='/register' element={<SignupPage/>}/>
      <Route path='/' element={<LoginPage/>}/>
      
      <Route path='/student/dashboard' element={<DashboardLayout/>}/>
     </Routes>
    </>
  )
}

export default App
