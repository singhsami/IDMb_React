import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Box, Typography,styled} from "@mui/material"

const Wrapper = styled(Typography)`
    margin-top:20px;
    color:#FFFFFF;
    
`

const responsive = {
    
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


const Slide = ({movies}) => {
  return (
    <Box>
      <Carousel 
      responsive={responsive}
      swipeable={false}
      draggable={false}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      slidesToslides={1}

      >
  {
    movies.map(movie => (
          <>
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} style={{width:"100%"}} alt="Banner" />
            <Wrapper>{movie.original_title}</Wrapper>
           </>
        ))
  }
</Carousel>;
    </Box>
  )
}

export default Slide
