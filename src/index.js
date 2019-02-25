import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/App';

import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import ErrorBoundry from '../src/components/error-boundry';
import BookstoreService from '../src/services/bookstore-service';
import { BookstoreServiceProvider } from '../src/components/bookstore-service-context';
import store from '../src/store';

const bookstoreService = new BookstoreService();
ReactDOM.render(
<Provider store={store}>
    <ErrorBoundry>
        <BookstoreServiceProvider value={bookstoreService}>
            <Router>
                <App />
            </Router>
        </BookstoreServiceProvider>
    </ErrorBoundry>
</Provider>, 
document.getElementById('root'));
