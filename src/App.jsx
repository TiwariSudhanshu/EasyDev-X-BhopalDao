import SignupPage from './signupPage'
import './index.css'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './loginPage'
function App() {

  return (
    <>
     <Routes>
      <Route path='/register' element={<SignupPage/>}/>
      <Route path='/' element={<LoginPage/>}/>
      
     </Routes>
    </>
  )
}

export default App
