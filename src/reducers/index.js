import updateBookList from './book-list';
import upadteShoppingCart from './shopping-cart';

const reduser = (state, action) => {
    return {
        bookList: updateBookList(state, action),
        shoppingCart: upadteShoppingCart(state, action)
    }
}

export default reduser;