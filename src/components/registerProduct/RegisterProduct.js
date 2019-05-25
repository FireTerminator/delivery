import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import api from '../../services/api';


/*
api.post("/users", {name: "Ricardo"}).then(function(res){
  console.log(res.data)
});
 
api.get("/users").then(function(res){
  console.log(res.data).catch(function(err){
    if(err){
      console.log(err);
    }
  })
});
*/
export default class RegisterProduct extends Component {
  
  state = { name: '', email: '', submittedName: '', submittedEmail: '' }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { name, email } = this.state

    this.setState({ submittedName: name, submittedEmail: email })
  }

  dataForSend = ()=>{
    const {title, price, company, count, incart, info, total, img} = this.state;
    api.post("/products", {title, price, company, count, incart, info, total, img}).then(function(res){
      console.log(res.data);
    });
  }

  render() {
    const {title, price, company, count, incart, info, total, img} = this.state;
    
    return (
      <div>
        <Form onSubmit={this.dataForSend}>
          
           <Form.Input label='Titulo' placeholder='Titulo' name='title' value={this.state.title} />
           <Form.Input label='Preço' placeholder='Preço' name='price' value={this.state.price}  />
           <Form.Input label='Fabricante' placeholder='Fabricante' name='company' value={this.state.company}  />
           <Form.TextArea label='Descrição' placeholder='Descrição' name='info' value={this.state.incart}/>
           <Form.Group inline>
            <Form.Input disabled placeholder='carrinho' name='incart'  defaultValue= 'false' value={this.state.incart}  />
            <Form.Input disabled placeholder='imagem' name='img' defaultValue='img/product-1.png' value={this.state.img}  />
            <Form.Input disabled  name='count' defaultValue='0' value={this.state.count}  />
            <Form.Input disabled  name='total' defaultValue='0' value={this.state.total}  />
           </Form.Group>
           <Form.Button content='Submit' />
          
        </Form>
        <strong>onChange:</strong>
        
        <strong>onSubmit:</strong>
       
      </div>
    )
  }
}