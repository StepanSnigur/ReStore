import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { bookRemovedFromCart, allBooksRemovedFromCart, bookAddedToCart } from '../actions/index';

const OrderBlock = styled.div`
    margin-top: 15px;
`
const OrderTitle = styled.h2`
    font-size: 35px;
    font-weight: normal;
`
const CartTable = styled.table`
    width: 100%;
`
const CartButton = styled.button`
    margin-left: 5px;
    margin-top: 5px;
`
const TotalPrice = styled.h3`
    color: #000;
    margin-top: 30px;
    margin-bottom: 10px;
    text-align: right;
`

const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {
    const renderRow = (item, idx) => {
        return (
            <tr key={item.id}>
                <td>{idx + 1}</td>
                <td>{item.title}</td>
                <td>{item.count}</td>
                <td>${item.total}</td>
                <td>
                    <CartButton onClick={() => onDelete(item.id)} className="btn btn-outline-danger btn-sm float-right">
                        <i className="fa fa-trash-alt" />
                    </CartButton>
                    <CartButton onClick={() => onIncrease(item.id)} className="btn btn-outline-success btn-sm float-right">
                        <i className="fa fa-plus-circle" />
                    </CartButton>
                    <CartButton onClick={() => onDecrease(item.id)} className="btn btn-outline-warning btn-sm float-right">
                        <i className="fa fa-minus-circle"></i>
                    </CartButton>
                </td>
            </tr>
        );
    }
    return (
        <OrderBlock>
            <OrderTitle>Your Order</OrderTitle>
            <CartTable>
                <thead className="border-top">
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th className="text-center">Action</th>
                    </tr>
                </thead>
                <tbody className="border-top">
                    {
                        items.map(renderRow)
                    }
                </tbody>
            </CartTable>
            <TotalPrice>{`Total $${total}`}</TotalPrice>
        </OrderBlock>
    );
}

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
    return {
        items: cartItems,
        total: orderTotal
    }
}
const mapDispatchToProps = {
    onDecrease: bookRemovedFromCart,
    onIncrease: bookAddedToCart,
    onDelete: allBooksRemovedFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);