import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
    let isCartItem = cartItems.find(item => item.id === productToAdd.id);
    if(isCartItem){
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
        {...cartItem, quantity: cartItem.quantity + 1}
        : cartItem
        );   
    }
    return [...cartItems, {...productToAdd, quantity: 1}];
};
const itemsCounter = (cartItems) => {
    return cartItems.reduce((accumulator, currentElement)=>{
        return accumulator + currentElement.quantity;
    },0);
};
const itemsTotal = (cartItems) => {
    return cartItems.reduce((accumulator, currentElement)=>{
        return accumulator + currentElement.quantity * currentElement.price;
    },0);
};
const incrementQuantity = (cartItems, itemToIncrement) =>{
    return cartItems.map(cartItem => cartItem.id === itemToIncrement.id ?
        {...cartItem, quantity: cartItem.quantity += 1}
        : cartItem
    );
};
const decrementQuantity = (cartItems, itemToDecrement) => {
    //decrement the quantity of an expecific object in the array
    //return a new array with that item updated
    // if the quantity of the item is less or iqual to 0 than is no gonna retur that object 
    if(itemToDecrement.quantity === 1){
        return removeItem(cartItems, itemToDecrement);
    }
    return cartItems.map(cartItem => {
        if(cartItem.id === itemToDecrement.id){
            return {...cartItem, quantity: cartItem.quantity -= 1};
        }
        return cartItem;
    });

};
const removeItem = (cartItems, itemToRemove) => {
    return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id);
}
export const CartContext = createContext({
    isCartOpen: false,
    setIsCardOpen: () => null,
    cartItems: [],
    addItemToCart: () => {},
    counter: 0,
    incrementCartItemQuantity: () => {},
    decrementCartItemQuantity: () => {},
    removeCartItem: () => {},
    cartTotal: 0
});

export const CartProvider = ({ children }) => {
    const [ isCartOpen,  setIsCardOpen ] = useState(false);
    const [ cartItems, setCartItems ] = useState([]);  
    const [ counter, setCounter ] = useState(0);  
    const [ cartTotal, setCartTotal ] = useState(0);  

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));        
    };
    const incrementCartItemQuantity = (itemToIncrement) => {
        setCartItems(incrementQuantity(cartItems, itemToIncrement));
    }
    const decrementCartItemQuantity = (itemToDecrement) => {
        setCartItems(decrementQuantity(cartItems, itemToDecrement));
    }
    const removeCartItem = (itemToRemove) => {
        setCartItems(removeItem(cartItems, itemToRemove));
    }

    useEffect(()=>{
        setCounter(itemsCounter(cartItems));
    },[cartItems]);

    useEffect(()=>{
        setCartTotal(itemsTotal(cartItems));
    },[cartItems]);
    

    const value = { 
        isCartOpen, 
        setIsCardOpen, 
        cartItems, 
        addItemToCart,
        counter,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
        removeCartItem,
        cartTotal
    };
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};