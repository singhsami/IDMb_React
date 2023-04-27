import React from 'react'
import Header from "../../src/components/common/Header"
import {useEffect,useState} from "react"
import { catergoryMovies } from "../services/api";
import {NOWPLAYING_API_URL} from "../constants/constant"
import Banner from "../../src/components/common/Banner"
import Midsection from '../../src/components/common/Midsection';
import Slide from '../components/common/Slide';



import {  Box,styled } from '@mui/material';

const Wrapper = styled(Box)`
    padding:20px 115px;
    display:flex
    
`
const Component = styled(Box)`
    padding:0px 115px;
   
    
`



const Home = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
      const getData = async () => {
          let response = await catergoryMovies(NOWPLAYING_API_URL);
          setMovies(response.results);   
          
      }
      getData();
  }, [])

  return (
    <>
    <Header />
    <Wrapper>
    <Banner movies={movies}/>
    <Midsection movies={movies}/>
    </Wrapper>
    <Component>
    <Slide movies={movies}/>
    <Slide movies={movies}/>
    <Slide movies={movies}/>
    </Component>
    </>
    
  )
}

export default Home