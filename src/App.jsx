import SignupPage from './signupPage'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<SignupPage/>}/>
     </Routes>
    </>
  )
}

export default App
