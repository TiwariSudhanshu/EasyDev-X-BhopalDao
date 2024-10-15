import SignupPage from './components/signupPage'
import './index.css'
import { Routes, Route } from 'react-router-dom'
import DashboardLayout from "./dashboard/student"
import LoginPage from './components/loginPage'
import NgoDashboard from './dashboard/ngo'
function App() {

  return (
    <>
     <Routes>
      <Route path='/register' element={<SignupPage/>}/>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/student/dashboard' element={<DashboardLayout/>}/>
      <Route path='/ngo/dashboard' element={<NgoDashboard/>} />
     </Routes>
    </>
  )
}

export default App
