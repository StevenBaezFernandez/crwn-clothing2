import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import ProducCard from "../../components/product-card/product-card.component";
import { useNavigate } from "react-router-dom";

import { ProductsContainer, ShopPreviewTitle } from './shop.style';

const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext);  
    const navigate = useNavigate();  
    return (
        <Fragment>
            {
                Object.keys(categoriesMap).map(title => (
                    <Fragment key={title}>
                        <ShopPreviewTitle onClick={()=>{navigate(`${title}`)}}>{title}</ShopPreviewTitle>
                        <ProductsContainer>
                            {categoriesMap[title].slice(0, 4).map(product => (
                                <ProducCard key={product.id} product={product}/>
                            ))}
                        </ProductsContainer>        
                    </Fragment>
                ))
            }
        </Fragment>
    );
};

export default Shop;