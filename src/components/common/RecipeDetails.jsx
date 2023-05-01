import React, { useEffect, useState } from 'react'
import { getRecipes } from '../../services/api'
import { Link, useParams } from 'react-router-dom'
import { Grid,Button, Header,Segment, SegmentGroup } from 'semantic-ui-react'



const RecipeDetails = () => {
    const {id}=useParams()
    const [recipe,setRecipe]=useState({})
    

    useEffect(()=>{
        const getData=async()=>{
            let result=await getRecipes(id)
           if (result && result.recipe){
            setRecipe(result.recipe)
           }
            
        }
        getData()
    },[])
  return (
    Object.keys(recipe).length > 0 ?
     <Grid container stackable columns={2} style={{marginTop:20}}>
        <Grid.Column>
        <img src={recipe.image_url} style={{height:300,width:"100%"}}></img>
        <div className='DetailsButton'>
        <Button 
        as={Link} to="/recipes" content="Back to Recipe Page" color='yellow'>
        </Button></div>
        </Grid.Column>
        
        <Grid.Column>
          <Header size="medium">{recipe.title}</Header>
          <p>Provided by:{recipe.publisher}</p>

          <Button  href={recipe.publisher_url} target="_blank" content="Publisher Webpage" color='blue'></Button>
          <Button  href={recipe.source_url} target="_blank" content="Recipie URL" color='green'></Button>
          <SegmentGroup>
            {
              recipe && recipe.ingredients.map(data=>(
                <Segment>{data}</Segment>
              ))
            }
          </SegmentGroup>
        </Grid.Column>
     </Grid>: null
    
   
  )
}

export default RecipeDetails
