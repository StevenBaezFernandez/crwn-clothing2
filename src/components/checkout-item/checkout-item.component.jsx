import { CheckoutItemContainer, ImageContainer, Img, Name, Quantity, Price, Arrow, Value, RemoveButton } from './checkout-item.style';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CheckoutItem = ({cartItem}) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const { incrementCartItemQuantity, decrementCartItemQuantity, removeCartItem } = useContext(CartContext);
    return(
        <CheckoutItemContainer>
            <ImageContainer>
                <Img src={imageUrl} alt={name}/>
            </ImageContainer>
            <Name>{name}</Name>
            <Quantity>
                <Arrow onClick={()=>decrementCartItemQuantity(cartItem)}>
                    &#10094;
                </Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={()=>incrementCartItemQuantity(cartItem)}>
                    &#10095;
                </Arrow>
            </Quantity>
            <Price>{price}</Price>
            <RemoveButton onClick={()=> removeCartItem(cartItem)}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem;