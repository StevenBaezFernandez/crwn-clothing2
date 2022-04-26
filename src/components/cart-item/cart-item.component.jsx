import { CartItemContainer, Img, ItemsDetails, Name } from './cart-item.style';

const CartItem = ({cartItem}) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <CartItemContainer>
            <Img src={imageUrl} alt={name}/>
            <ItemsDetails>
                <Name className='name'>{name}</Name>
                <span className='price'>
                    {quantity} X ${price}
                </span>
            
            </ItemsDetails>
        </CartItemContainer>
    );
};

export default CartItem;
