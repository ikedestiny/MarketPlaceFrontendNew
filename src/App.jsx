import './App.css'
import { Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import Login from './pages/Login'


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
