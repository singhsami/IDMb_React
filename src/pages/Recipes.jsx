import React, { useEffect,useState } from 'react'
import Search from '../components/common/Search'
import { getRecipe } from '../services/api'
import  RecipieList from "../components/common/RecipieList"

const Recipes = () => {
    const [searchQuery,setsearchQuery]=useState("pizza")
    const [recipes,setRecipes]=useState([])

 useEffect(()=>{
    const getSearchResult=async()=>{
        let resolnse=await getRecipe(searchQuery)
        if(resolnse && resolnse.recipes){
        setRecipes(resolnse.recipes);}
    }
    getSearchResult()
 },[searchQuery])   
 

  return (
      
<>
 <Search searchQuery={searchQuery} setsearchQuery={setsearchQuery}/>
 <RecipieList recipes={recipes} searchQuery={searchQuery}/>
   </>
  )
}

export default Recipes
