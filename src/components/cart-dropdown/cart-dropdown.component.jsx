import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import { useNavigate } from 'react-router-dom';


import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.style.scss';

import Button from '../button/button.component';



const CartDropdowm = () => {
    const navigate = useNavigate();
    const { isCartOpen, cartItems } = useContext(CartContext);
    return (
        <div className={`${isCartOpen ? 'active' : ''} cart-dropdown-container`}>
            <div className='cart-items'>                
                {cartItems.length ?
                    cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)
                    : <span className='empty-message'>Cart is empty</span>
                }
            </div>
            <Button onClick={()=> navigate('checkout')}>GO TO CHECKOUT</Button>
        </div>
    );
};

export default CartDropdowm;