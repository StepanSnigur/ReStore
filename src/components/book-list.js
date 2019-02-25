import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import BookListItem from './book-list-item';
import Preloader from '../components/preloader/preloader';
import ErrorIndicator from '../components/error-boundry';
import { withBookstoreService } from '../components/hoc/with-bookstore-service';
import { fetchBooks, bookAddedToCart } from '../actions/index';
import compose from '../utils/compose';

const List = styled.ul`
    color: #000;
`
const ListItem = styled.li`
    list-style: none;
`

const BookList = ({ books, onAddedToCart }) => {
    return (
        <List>
            {
                books.map((book) => {
                    return <ListItem key={book.id}><BookListItem onAddedToCart={() => onAddedToCart(book.id)} book={book} /></ListItem>
                })
            }
        </List>
    );
}
class BookListContainer extends Component {
    componentDidMount() {
        this.props.fetchBooks();
    }
    render() {
        if (this.props.loading) {
            return <Preloader />
        } 
        if (this.props.error) {
            return <ErrorIndicator />
        }
        return <BookList books={this.props.books} onAddedToCart={this.props.onAddedToCart} />
    }
}

const mapStateToProps = ({ bookList: { books, loading, error } }) => {
    return {
        books,
        loading,
        error
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchBooks: fetchBooks(ownProps.bookstoreService, dispatch),
        onAddedToCart: (id) => dispatch(bookAddedToCart(id))
    }
}

export default compose (
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);