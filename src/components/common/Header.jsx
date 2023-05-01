import React from 'react'
import { Menu } from 'semantic-ui-react'
import {logo} from "../../constants/constant"
import {Link} from "react-router-dom"

const Header = () => {


  return (
  <Menu style={{margin:0}}>
  <img  as={Link} to="./" src={logo} width="150"/>
    <Menu.Item  as={Link} to="/">Home</Menu.Item>
    <Menu.Item as={Link} to="/recipes">Recipes</Menu.Item>
  </Menu>
  )
}

export default Header