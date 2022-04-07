import { useContext } from 'react';
import { toggleCartDropdownContext } from '../../contexts/toggle-cart-dropdown.context';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon-style.scss';



const CartIcon = () => {
    const { showCartDropdown, setShowCartDropdowm } = useContext(toggleCartDropdownContext);
    const handllerSubmit = () => {
        console.log('fire');
        setShowCartDropdowm( !showCartDropdown ); 
    }

    return(
        <div className='cart-icon-container' onClick={handllerSubmit}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>0</span>
        </div>
    );
};

export default CartIcon;