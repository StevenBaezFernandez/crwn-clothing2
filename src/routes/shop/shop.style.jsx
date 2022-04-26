import styled from 'styled-components';

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 10px;
    row-gap: 50px;
`;
export const ShopPreviewTitle = styled.h2`
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: -1px;
    &:hover {
        color: #444444

    }
`;