import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, Button } from 'semantic-ui-react'
import { Link } from "react-router-dom"

const RecipieListItem = ({ recipe }) => {
  return (
    <Card className='recipeList'>
      <img src={recipe.image_url} style={{ height: 170 }} alt="recipie_img" />
      <CardContent>
        <CardHeader content={recipe.title}></CardHeader>
        <CardDescription><h4>{recipe.publisher}</h4></CardDescription>
        <div className='ListItemButtton'>
          <Button as={Link} to={`${recipe.recipe_id}`} content="Details" color='blue'></Button>
          <Button href={recipe.source_url} content="Recipe URL" color='green'></Button>
        </div>
      </CardContent>
    </Card>

  )
}

export default RecipieListItem
