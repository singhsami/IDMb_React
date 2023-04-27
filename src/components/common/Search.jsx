import React from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Link} from "react-router-dom"
import { routePath } from '../../constants/route';

const Search = ({open,handleClose}) => {

  const openMenu = Boolean(open);

  return (
    <div>
        <Menu
        id="basic-menu"
        anchorEl={open}
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
      <Link to={`${routePath.categories}?category=popular`} style={{color:"inherit",textDecoration:"none"}}>
        <MenuItem onClick={handleClose}>Popular</MenuItem>
      </Link> 
      <Link to={`${routePath.categories}?category=toprated`} style={{color:"inherit",textDecoration:"none"}}> 
        <MenuItem onClick={handleClose}>Top Rated</MenuItem>
      </Link>
      <Link to={`${routePath.categories}?category=upcoming`} style={{color:"inherit",textDecoration:"none"}}>  
        <MenuItem onClick={handleClose}>Upcoming</MenuItem>
      </Link>
      
      </Menu>
    </div>
  )
}

export default Search
