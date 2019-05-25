import React, { Component } from 'react';
import { Card, Button, Image, Icon, Input } from 'semantic-ui-react';
import {ProdutConsumer} from "../../context";
import {Link} from 'react-router-dom';

// import { Container } from './styles';

export default class Details extends Component {
  render() {
    const {id, title, img, price, inCart} = this.props.product;
    return (
      <Card> 
      <Image  as={Link} to='/cart' src={img} wrapped ui={false} />
      
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Header>R${price}</Card.Header>
        
        <Card.Description>
          <Icon name="minus"></Icon>
          <Input defaultValue='1'></Input>
          <Icon name="plus"></Icon>
        </Card.Description>
      </Card.Content>
      <Card.Content >
        <Button> <Icon name ="cart plus"></Icon> Comprar</Button>
      </Card.Content>
    </Card>
    )
  }
}
