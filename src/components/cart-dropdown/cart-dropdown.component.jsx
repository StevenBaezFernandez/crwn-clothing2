import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.style.scss';

import Button from '../button/button.component';



const CartDropdowm = () => {

    const { isCartOpen, cartItems } = useContext(CartContext);
    return (
        <div className={`${isCartOpen ? 'active' : ''} cart-dropdown-container`}>
            <div className='cart-items'>
                {cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)}
            </div>
            <Button>GO TO CHECKOUT</Button>
        </div>
    );
};

export default CartDropdowm;