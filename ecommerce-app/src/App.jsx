import { useContext } from 'react'
import { AuthContext } from './auth/authContext'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Product from './components/Product'

function App(){
    const { user } = useContext(AuthContext)
    return(
        <div>
            <Navbar/>
            <hr/>
            {user ? <Product/> : <Login/>}
        </div>
    )
}

export default App