import React,{createContext, useState} from 'react' ;
import all_product from '../components/Assets/all_product'

export const ShopContext = createContext(null);
const getDefaultCart = ()=>{
    let cart = {};
    for(let i=0; i<all_product.length; i++){
        cart[i]= 0;
    }
    return cart;
}
const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())
    
    const addToCart = (id) => {
        setCartItems((prev)=>({...prev,[id]:prev[id]+1}))
    }
    const removeFromCart = (id) => {
        setCartItems((prev)=>({...prev,[id]:prev[id]-1}))
    }

    const getTotalCart = () =>{
        let total = 0;
        for(const item in cartItems){
           if(cartItems[item]>0){
            let itemInfo = all_product.find((product)=>product.id===Number(item))
            total += itemInfo.new_price * cartItems[item];
           }
        }
        return total;
    }

   const getCartIcon= ()=>{
let total = 0;
for(const item in cartItems){
    if(cartItems[item]>0){
        total += cartItems[item];
    }
    }
    return total;
}


    const contextValue = {getCartIcon,getTotalCart, all_product,cartItems,addToCart,removeFromCart}
    return(
        <ShopContext.Provider value={contextValue} >
        {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;