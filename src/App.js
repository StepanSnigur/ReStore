import React from 'react';
import './index.css';
import styled from 'styled-components';

import { withBookstoreService } from '../src/components/hoc/with-bookstore-service';
import { Route, Switch } from 'react-router-dom';

import CartPage from '../src/components/pages/cart-page';
import HomePage from '../src/components/pages/home-page';
import ShopHeader from '../src/components/shop-header';

const MainWrapper = styled.div`
  width: 1000px;
  margin: 0 auto;
`

const App = ({ bookstoreService }) => {
  return (
    <MainWrapper>
      <ShopHeader numItems={5} total={210} />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/cart" component={CartPage} />
      </Switch>
    </MainWrapper>
  );
}

export default withBookstoreService()(App);