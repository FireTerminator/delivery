import React, { Component } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar.js';
import ProductList from './components/productList/ProductList.js';
import Details from './components/details/Details.js';
import Cart from './components/cart/Cart.js';
import Default from './components/default/Default.js';
import Login from './components/login/Login.js';
import RegisterProduct from './components/registerProduct/RegisterProduct'
import {ProductProvider} from './context';
//import  from './components//.js';


class App extends Component {
  render() {
    return (
      <div>
        
        <BrowserRouter>
          <Navbar/>
          <ProductProvider>
          <Switch>
          RegisterProduct
            <Route exact path="/" component={ProductList}></Route>
            <Route exact path="/RegisterProduct" component={RegisterProduct}></Route>
            <Route path="/details" component={Details}></Route>
            <Route path="/cart" component={Cart}></Route>
            <Route path="/login" component={Login}></Route>
            <Route component={Default}></Route>   
          </Switch>
          </ProductProvider>
        </BrowserRouter>
        <div><span><i className="fas fa-home"/></span></div>
        </div>
       
        
    );
  }
}

export default App;
