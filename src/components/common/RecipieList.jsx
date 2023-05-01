import React from 'react'
import RecipieListItem from './RecipieListItem'
import {Grid} from 'semantic-ui-react'


const RecipieList = ({recipes}) => {
  return (
    <>
   <Grid columns={4} textAlign='center'>
    {
      recipes.map(recipe=>(
        <Grid.Column >
        <RecipieListItem recipe={recipe}/>
        </Grid.Column>
        
      ))
    }
   </Grid>
    
    </>
  )
}

export default RecipieList
