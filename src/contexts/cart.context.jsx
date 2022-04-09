import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
    let isCartItem = cartItems.find(item => item.id === productToAdd.id);
    if(isCartItem){
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
        {...cartItem, quantity: cartItem.quantity + 1}
        : cartItem
        );   
    }
    return [...cartItems, {...productToAdd, quantity: 1}];
}
const itemsCounter = (cartItems) => {
    return cartItems.reduce((accumulator, currentElement)=>{
        return accumulator + currentElement.quantity;
    },1);
};

export const CartContext = createContext({
    isCartOpen: false,
    setIsCardOpen: () => null,
    cartItems: [],
    addItemToCart: () => {},
    counter: 0,
});

export const CartProvider = ({ children }) => {
    const [ isCartOpen,  setIsCardOpen ] = useState(false);
    const [ cartItems, setCartItems ] = useState([]);  
    const [ counter, setCounter ] = useState(0);  

    const addItemToCart = (productoToAdd) => {
        setCartItems(addCartItem(cartItems, productoToAdd));
        setCounter(itemsCounter(cartItems));
    };
    
    const value = { 
        isCartOpen, 
        setIsCardOpen, 
        cartItems, 
        addItemToCart,
        counter
    };
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};