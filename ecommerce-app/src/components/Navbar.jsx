import { useContext } from "react"
import { AuthContext } from '../auth/authContext'

function Navbar(){
    const { user, logout, product } = useContext(AuthContext)
    return(
        <div>
            {user && <span>Hello, {user.name}</span>}
            {product && <span> | Selected: {product.name}</span>}
            {user && <button onClick={logout}>Logout</button>}
        </div>
    )
}

export default Navbar