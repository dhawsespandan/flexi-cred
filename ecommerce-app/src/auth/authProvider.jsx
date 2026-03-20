import { useState } from "react"
import { AuthContext } from "./authContext";

function AuthProvider({ children }){
    const [user, setUser] = useState(null)
    const [product, setProduct] = useState(null)

    const login = (userData) => {
        setUser(userData)
    }
    const logout = () => {
        setUser(null)
        setProduct(null)
    }
    const selectProduct = (productData) => {
        setProduct(productData)
    }
    const clearProduct = () => {
        setProduct(null)
    }
    return(
        <AuthContext.Provider value={{ user, login, logout, product, selectProduct, clearProduct }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider