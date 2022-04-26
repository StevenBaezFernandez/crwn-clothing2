import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon-style';

const CartIcon = () => {
    const { isCartOpen, setIsCardOpen, counter } = useContext(CartContext);
    const handllerSubmit = () => {
        console.log('fire');
        setIsCardOpen( !isCartOpen ); 
    };

    return(
        <CartIconContainer onClick={handllerSubmit}>
            <ShoppingIcon/>
            <ItemCount>{counter}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;