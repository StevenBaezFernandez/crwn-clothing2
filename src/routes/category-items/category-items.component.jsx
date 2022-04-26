import { useContext, Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProducCard from "../../components/product-card/product-card.component";

import { CategoriesContext } from "../../contexts/categories.context";
import { CategoryItemContainer, CategoryTitle } from './category-items.style';

const CategoryItems = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    const {category} = useParams();
    const [ products, setProducts ] = useState(categoriesMap[category]);

    useEffect(()=>{
        setProducts(categoriesMap[category]);
    },[category, categoriesMap]);
    return (
    <Fragment>
        <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
        <CategoryItemContainer>
        {products &&
            products.map((product) => (
            <ProducCard key={product.id} product={product} />
            ))}
        </CategoryItemContainer>
    </Fragment>
    );

};

export default CategoryItems;