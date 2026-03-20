import { useContext } from "react";
import { AuthContext } from "../auth/authContext";

function Profile(){
    const {user}=useContext(AuthContext)
    return <h2>{user ? user.name : "Not logged in"}</h2>
}
export default Profile