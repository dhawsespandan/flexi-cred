import { useContext, useState } from "react";
import { AuthContext } from "../auth/authContext";

function Login(){
    const {login}=useContext(AuthContext)
    const [name, setName]=useState("")

    const handleLogin=()=>{
        login({name})
    }
    return(
        <div>
            <input
            placeholder="Enter name"
            onChange={(e)=>setName(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login