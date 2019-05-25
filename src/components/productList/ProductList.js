import React, { Component } from 'react';
import Title from '../title/Title.js';
import Product from '../product/Product.js';
import { Card} from 'semantic-ui-react';
//import api from '../../services/api';
import {ProductConsumer} from '../../context';

export default class ProductList extends Component{ 

  render(){


    return(
      <React.Fragment>
        <Title name="" title="produtos"></Title>
        <Card.Group itemsPerRow={4} >
          <ProductConsumer>

            {value=>{
              return value.products.map( product =>{
                return <Product key={product.id} product ={product}  />
              })
            }}
          </ProductConsumer>
          </Card.Group>
        </React.Fragment>
    )
  }
}

