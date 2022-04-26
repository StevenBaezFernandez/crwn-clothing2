import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import { ProductCardContainer, Img, ProductCardButton, Footer, Name, Price } from './product-card.style';

import {BUTTON_TYPE_CLASSES} from '../button/button.component';

const ProducCard = ({product}) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext);
    const handlerClick = () => {
        addItemToCart(product);
    }
    return (
        <ProductCardContainer>
            <Img src={imageUrl} alt={`${name}`}/>
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>
            <ProductCardButton buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={handlerClick}>Add to card</ProductCardButton>
        </ProductCardContainer>
    )
}

export default ProducCard;