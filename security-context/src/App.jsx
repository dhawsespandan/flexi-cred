// App.jsx
import { useContext } from 'react'           // ✅ added
import './App.css'
import { AuthContext } from './auth/authContext'
import Navbar from './components/NavBar'
import Profile from './components/Profile'
import Login from './components/Login'       // ✅ added

function App(){
  const {user} = useContext(AuthContext)
  return(
    <div>
      <Navbar/>                              {/* ✅ Navbar is self-closing */}
      <hr/>
      {user ? <Profile/> : <Login/>}        {/* ✅ moved outside Navbar */}
    </div>
  )
}

export default App