import { Box,Typography,styled,List,ListItem } from '@mui/material';
import { Star } from '@mui/icons-material';
import React from 'react'


const Component=styled(List)`
display:flex;
background:white

`


const Rating = ( {movies} ) => {
  return ( 
    <>
    {
        movies.map(movie => ( 
            <Component>
                <ListItem>
                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} style={{width:"100px",height:100}} alt="Banner" />
                </ListItem>
               
                <ListItem>
                <Typography>{movie.original_title}</Typography>
                </ListItem>

                <ListItem>
                    <Star color='warning'/>
                    <Typography>{movie.vote_average}</Typography>
                </ListItem>

                <ListItem>
                <Typography>{movie.release_date}</Typography>
                </ListItem>
                
                </Component>
                 ))
      }
      </>

  )
}

export default Rating;