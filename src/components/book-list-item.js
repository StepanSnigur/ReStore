import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    height: 200px;
    margin-top: 20px;
    margin-left: 50px;
`
const BookImage = styled.img`
    width: 150px;
    height: 100%;
    margin-right: 30px;
`
const BookDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const Title = styled.a`
    color: steelblue;
    text-decoration: none;
    font-size: 32px;
    font-weight: 700;
`
const Price = styled.p`
    color: #000;
    font-size: 28px;
    font-weight: 500;
`
const AddButton = styled.button`
    background: steelblue;
    padding: 10px;
    width: 120px;
    color: #fff;
    border: none;
    border-radius: 5px;
    outline: none;
    cursor: pointer;

    &:active, &:focus {
        outline: none;
    }
`

const BookListItem = ({ book, onAddedToCart }) => {
    return (
        <Container>
            <BookImage src={book.coverImage} alt="book-image" />
            <BookDetails>
                <div>
                    <Title href="#">{book.title}</Title>
                    <p>{`by ${book.author}`}</p>
                    <Price>{`${book.price}$`}</Price>
                </div>
                <AddButton onClick={onAddedToCart}>Add to cart</AddButton>
            </BookDetails>
        </Container>
    );
}

export default BookListItem;