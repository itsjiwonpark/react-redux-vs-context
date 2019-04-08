import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import GlobalState from "./context/GlobalState";
import EntryState from "./context/EntryState";
import ShopContext from "./context/shop-context";
import ProductsPage from "./pages/Products";
import CartPage from "./pages/Cart";
import Test from "./pages/Test";
import "./App.css";

class App extends Component {
  render() {
    return (
      <GlobalState>
        <EntryState>
          <Test data={false} />
          <BrowserRouter>
            <Switch>
              <Route path="/" component={ProductsPage} exact />
              <Route path="/cart" component={CartPage} exact />
            </Switch>
          </BrowserRouter>
        </EntryState>
      </GlobalState>
    );
  }
}

export default App;
