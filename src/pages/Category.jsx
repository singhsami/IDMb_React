import React from 'react'
import Header from "../components/common/Header"
import { useState,useEffect } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Box,styled,Typography,Divider} from "@mui/material"
import { catergoryMovies } from '../services/api';
import { useLocation } from 'react-router-dom';
import { POPULAR_API_URL,TOPRATED_API_URL,UPCOMING_API_URL } from '../constants/constant';
import { moviesType } from '../constants/constant';
import Rating from "../components/common/Rating"



const Component = styled(Box)`
width:80%;
margin:auto;
  
`


const Boxstyle = styled(Box)`
      display:flex;
      flex-direction:column;
      margin-top:20px;
      background:white
`

const responsive = {
    
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


const Category = () => {

const [movies,setMovies]=useState([])

const {search}=useLocation()

useEffect(()=>{
    const getData=async (API_URL)=>{
        let responce=await catergoryMovies(API_URL)
        setMovies(responce.results)
    }

    let API_URL;
            if(search.includes("popular")){
                API_URL=POPULAR_API_URL
            }else if(search.includes("upcoming")){
                API_URL=TOPRATED_API_URL
            }else if(search.includes("top-rated")){
                API_URL=UPCOMING_API_URL
            }


    getData(API_URL);
},[search])

  return (
    <>
      <Header/> 
<Component>
    <Carousel 
      responsive={responsive}
      swipeable={false}
      draggable={false}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      keyBoardControl={true}
      slidesToslides={1}
>
  {
    movies.map(movie => (
            
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} style={{width:"100%",height:450}} alt="Banner" />
            
          
        ))
  }
</Carousel>
        <Boxstyle>
            <Typography variant='h4'>IMDB Charts</Typography>
            <Typography variant='h2'>IMDB {moviesType[search.split("=")[1]]} Movies</Typography>
            <Typography variant='h6'>IMDB Top {movies.length} as rated by regular IMDb voters</Typography>
            <Divider/>
        </Boxstyle>    
        
        
        <Rating movies={movies}/>
        
</Component>
             
</>
)
}
export default Category
