import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data.js';
import api from '../src/services/api';

const ProductContext = React.createContext();
//provider = prover toda a informação para a aplicação que estiver "dentro"
//consumer = toda vez que precisar usar, sem precisar usar childs

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct
  }
componentDidMount(){
  api.get('/products').then(res=>{
    console.log(res.data);
    this.setState({products: res.data})
  })
}

  handleDetail = ()=>{
    console.log("hello from detail");
  }
  addToCart = ()=>{
    console.log("hello from add to cart");
  }
  render() {
    return (
        <ProductContext.Provider value={{
          ...this.state,
          handleDetail:this.handleDetail,
          addToCart:this.addToCart
        }}>
            {this.props.children}
        </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export{ProductProvider, ProductConsumer};