import React,{Component} from 'react';
import { Card, Button, Image, Icon, Input } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import{ProductConsumer} from '../../context';


//const src = '/images/wireframe/image.png'

export default class Product extends Component {
  render() {
    const {id, title, img, price, inCart} = this.props.product;
    return (
     /*
      <Card.Group itemsPerRow={2}>
      <div onClick={()=> console.log("Voce clicou em mim")}>
     
      
        <Link to="./details">
        <Image src={img}></Image>
        </Link>
        <Button><Icon name ="cart plus"></Icon> Comprar</Button>  
      </div> 
    </Card.Group>
    */
   <Card> 
      <Image  as={Link} to='/details' src={img} wrapped ui={false} />
      
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