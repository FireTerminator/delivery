import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
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
export default class Login extends Component {
  
  state = { name: '', email: '', submittedName: '', submittedEmail: '' }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { name, email } = this.state

    this.setState({ submittedName: name, submittedEmail: email })
  }

  dataForSend = ()=>{
    const {name} = this.state;
    api.post("/users", {name:name}).then(function(res){
      console.log(res.data);
    });
  }

  render() {
    const { name, email, submittedName, submittedEmail } = this.state

    return (
      <div>
        <Form onSubmit={this.dataForSend}>
          <Form.Group>
            <Form.Input placeholder='Name' name='name' value={this.state.name} onChange={this.handleChange} />
            <Form.Input
              placeholder='Email'
              name='email'
              value={email}
              onChange={this.handleChange}
            />
            <Form.Button content='Submit' />
          </Form.Group>
        </Form>
        <strong>onChange:</strong>
        <pre>{JSON.stringify({ name, email }, null, 2)}</pre>
        <strong>onSubmit:</strong>
        <pre>{JSON.stringify({ submittedName, submittedEmail }, null, 2)}</pre>
      </div>
    )
  }
}
