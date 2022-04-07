import { useContext } from "react";

import { ShopContext } from "../../contexts/shop.context";

import ProducCard from "../../components/product-card/product-card.component";

import './shop.style.scss';

const Shop = () => {
    const { currentShop } = useContext(ShopContext);
    
    return (
        <div className="products-container">
            {currentShop.map(product => (
                <ProducCard key={product.id} product={product}/>
            ))}
        </div>
    );
};

export default Shop;