import React, {Component} from 'react'
import { Menu,Input, Responsive, Dropdown, Icon } from 'semantic-ui-react'
import {Link} from 'react-router-dom';

// TODO: Update <Search> usage after its will be implemented

export default class Navbar extends Component{
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      
      <Menu secondary>
          <Dropdown item icon='bars' simple>
        <Dropdown.Menu>

          <Dropdown.Item  as={Link} to='/registerProduct' >Cadastrar produtos</Dropdown.Item>
          <Dropdown.Item></Dropdown.Item>
          <Dropdown.Item></Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Header></Dropdown.Header>
          <Dropdown.Item></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

       
        <Menu.Item  as={Link} to='/'
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
        <Menu.Item>
          {/* retirei o segment caso quebre o layout já sabe né... */}
            <Responsive  minWidth={491}>
              <Input icon='search' placeholder='Search...' />
            </Responsive>
            <Responsive  maxWidth={490}>
              <i className="fas fa-search"></i>
            </Responsive>
          </Menu.Item>

          <Menu.Item as={Link} to='/login'
            name='entrar'
            active={activeItem === 'entrar'}
            onClick={this.handleItemClick}
          />
          <Menu.Item as={Link} to='/cart'
            name='cart'
            active={activeItem === 'cart'}
            onClick={this.handleItemClick}
          >
          <i className="fas fa-cart-plus"></i>
          </Menu.Item>
        </Menu.Menu>
        
      </Menu>
    )
  }
}