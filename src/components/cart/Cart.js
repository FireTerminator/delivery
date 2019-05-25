import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Button } from 'semantic-ui-react'
// import { Container } from './styles';

export default class Cart extends Component {
  render() {
    return(
        <div>
            <h2>olá vindo de Cart</h2>
            <Link to='/details'>
            <Button></Button>
            </Link>
        </div>
    )
  }
}
