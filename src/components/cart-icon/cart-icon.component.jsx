import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon-style.scss';



const CartIcon = () => {
    const { isCartOpen, setIsCardOpen, counter } = useContext(CartContext);
    const handllerSubmit = () => {
        console.log('fire');
        setIsCardOpen( !isCartOpen ); 
    }

    return(
        <div className='cart-icon-container' onClick={handllerSubmit}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{counter}</span>
        </div>
    );
};

export default CartIcon;