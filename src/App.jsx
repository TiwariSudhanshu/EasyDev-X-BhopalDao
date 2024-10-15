import SignupPage from './components/signupPage'
import './index.css'
import { Routes, Route } from 'react-router-dom'
import DashboardLayout from "./dashboard/student"
import LoginPage from './components/loginPage'
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
