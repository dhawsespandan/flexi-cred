import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    const handleLogin = () => {
        axios.post("http://localhost:5000/login", { email, password })
        .then(res => {
            localStorage.setItem("token", res.data.token);
            navigate("/posts");
        });
    };

    return (
        <div>
            <h2>Login</h2>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <br /><br />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br /><br />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;