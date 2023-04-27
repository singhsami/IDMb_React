import React from 'react'
import {Box,Typography,styled} from "@mui/material"

const Wrapper = styled(Typography)`
    width:35%;
    display:flex;
    flex-direction:column;
    align-items:baseline;
    padding-left:20px;
  & > p {
    color:#f5C518;
    font-size:20px;
    font-weight:700;
    margin-bottom:10px;
        }
`
const Container = styled(Box)`
    display:flex; 
    color:#FFFFFF;
    & > p {
    margin-left:20px;
        } 
`



const Midsection = ({movies}) => {
  return (
    <Wrapper>
    <Typography>Up Next</Typography>
      {
            movies.slice(0,3).map(movie => (
            <Container>
            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} style={{width:"88px"}} alt="Banner" />
            <Typography>{movie.original_title}</Typography>
            </Container>              
            ))

      }                        
</Wrapper>
  )

}

export default Midsection;
