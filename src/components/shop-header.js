import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1px solid #000;
    padding-top: 10px;
    padding-bottom: 10px;
`
const ShopTitle = styled.h2`
    color: #000;
    margin-left: 10px;
    font-size: 35px;
`
const CartBlock = styled.div`
    display: flex;
    align-items: flex-end;
    margin-right: 10px;

    & > span {
        margin-right: 5px;
    }
    &:last-child {
        margin: 0;
    }
`
const CardImage = styled.img`
    margin-right: 10px;
`

const ShopHeader = ({ numItems, total }) => {
    return (
        <HeaderWrapper>
            <Link to="/">
                <ShopTitle>ReStore</ShopTitle>
            </Link>
            <CartBlock>
                <Link to="/cart">
                    <CardImage src="https://img.icons8.com/android/24/000000/shopping-cart.png" alt="cart"/>
                    <span>{`${numItems} items`}</span>
                    <span>{`(${total}$)`}</span>
                </Link>
            </CartBlock>
        </HeaderWrapper>
    );
}

export default ShopHeader;