import { useContext, useState } from "react"
import { AuthContext } from "../auth/authContext"

function Login(){
    const { login } = useContext(AuthContext)
    const [name, setName] = useState("")

    const handleLogin = () => {
        if(name.trim()) login({ name })
    }
    return(
        <div>
            <h2>Login</h2>
            <input
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login