import React from 'react';
import {AppBar,Toolbar,Typography,styled,Box,InputBase} from '@mui/material';
import Search from './Search';
import {Menu,ExpandMore,BookmarkAdd} from "@mui/icons-material"
import { useState } from 'react';
import {logoURL} from "../../constants/constant";

const StyledToolBar=styled(Toolbar)`
    background:#121212;
    padding:0 115px !important;
    min-height:56px !important;
    justify-content:space-between;
    & > *{
      padding:0 16px;
          }
    & > div{
      display:flex;
      cursor:pointer;
      align-items:center;
      & > p{
      font-size:14px;
      font-weight:600;
          }
    }
    & > p{
      font-size:14px;
      font-weight:600;
          }
`



const InputSearchField = styled(InputBase)`
    background: #FFFFFF;
    height: 30px;
    width: 55%;
    border-radius: 5px;
    
`
    


const Login = () => {

  const [open,setOpen]=useState(null)

function handleClick(e){
     setOpen(e.currentTarget)
}

const handleClose = () => {
      setOpen(null);
};

  return (
  <AppBar position="static">
    <StyledToolBar>
     <img src={logoURL} alt="logo" style={{width:65}} />
     <Box onClick={handleClick}>
          <Menu />
          <Typography>Menu</Typography>
     </Box>
     <Search open={open} handleClose={handleClose} placeholder="Search IMDb"/>
     <InputSearchField variant="outlined"  />
     
     <Typography>IBMD<Box component="span">Pro</Box></Typography>

     <Box>
          <BookmarkAdd />
          <Typography>Watchlist</Typography>
     </Box>

     <Typography>Signin</Typography>

     <Box>
          <Typography>EN</Typography>
          <ExpandMore />
     </Box>



    </StyledToolBar>
  </AppBar>
  )
}

export default Login