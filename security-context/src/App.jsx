import { useContext } from 'react'
import './App.css'
import { AuthContext } from './auth/authContext'
import Navbar from './components/NavBar'
import Profile from './components/Profile'
import Login from './components/Login'

function App(){
  const {user} = useContext(AuthContext)
  return(
    <div>
      <Navbar/>
      <hr/>
      {user ? <Profile/> : <Login/>}
    </div>
  )
}

export default App