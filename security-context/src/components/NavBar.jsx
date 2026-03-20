// Navbar.jsx
import { useContext } from "react"           // ✅ added
import { AuthContext } from '../auth/authContext'

function Navbar(){
    const {user, logout} = useContext(AuthContext)
    return(
        <div>
            {user && <button onClick={logout}>Logout</button>}
        </div>
    )
}

export default Navbar