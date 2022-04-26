import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import { useNavigate } from 'react-router-dom';


import CartItem from '../cart-item/cart-item.component';

import {CartDropdownContainer, EmptyMessage, CartItems} from './cart-dropdown.style';

import Button from '../button/button.component';



const CartDropdowm = () => {
    const navigate = useNavigate();
    const { isCartOpen, cartItems } = useContext(CartContext);
    return (
        <CartDropdownContainer>
            <CartItems>                
                {cartItems.length ?
                    cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)
                    : <EmptyMessage>Cart is empty</EmptyMessage>
                }
            </CartItems>
            <Button onClick={()=> navigate('checkout')}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    );
};

export default CartDropdowm;