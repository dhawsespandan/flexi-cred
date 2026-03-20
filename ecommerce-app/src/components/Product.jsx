import { useContext, useState } from "react"
import { AuthContext } from "../auth/authContext"

function Product(){
    const { product, selectProduct, clearProduct } = useContext(AuthContext)
    const [name, setName] = useState("")

    const handleSelect = () => {
        if(name.trim()) selectProduct({ name })
    }
    return(
        <div>
            <h2>Product</h2>
            {product 
                ? <div>
                    <p>Selected: {product.name}</p>
                    <button onClick={clearProduct}>Remove</button>
                  </div>
                : <div>
                    <input
                        placeholder="Enter product name"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button onClick={handleSelect}>Select Product</button>
                  </div>
            }
        </div>
    )
}

export default Product