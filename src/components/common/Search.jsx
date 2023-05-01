import React, { useState } from 'react'
import { Input,Form,Container, Header } from 'semantic-ui-react'

const Search = ({searchQuery,setsearchQuery}) => {

    const [value,setValue]=useState("")

    const onFormSubmit = () =>{
     setsearchQuery(value)
   
    }

  return (
    <div class="recipie-page">
    <h1>Search Recipes With 
      <span style={{color:"skyblue"}}> Our Recipes</span>
    </h1>
    <p>Input Recipes seperated by comma</p>

    <Form onSubmit={onFormSubmit}>
    <Input onChange={(e)=>setValue(e.target.value)}placeholder="tomato,potato,pizza" 
    action={{icon:"search",color:"primary"}}/>
    </Form>

    <Container>
      <Header style={{marginTop:10}} content={`RECIPE LIST FOR ${searchQuery}`}/>
    </Container>
  </div>
  )
}

export default Search
