import { useContext } from 'react';
import { toggleCartDropdownContext } from '../../contexts/toggle-cart-dropdown.context';

import './cart-dropdown.style.scss';
import Button from '../button/button.component';



const CartDropdowm = () => {

    const { showCartDropdown } = useContext(toggleCartDropdownContext);
    return (
        <div className={`${showCartDropdown ? 'active' : ''} cart-dropdown-container`}>
            <div className='cart-items'>
                <Button>GO TO CHECKOUT</Button>
            </div>
        </div>
    );
};

export default CartDropdowm;