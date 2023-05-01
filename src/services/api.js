import axios from "axios";

const API="https://forkify-api.herokuapp.com/api"

export const getRecipe=async(searchQuery)=>{
    
    try{
let response=await axios.get(`${API}/search?q=${searchQuery}`);
return response.data;
    }catch(error){
        console.log('Error while calling API',error.message);
        return error.response.data;
    }
}


export const getRecipes=async(searchQuery)=>{
    
    try{
let response=await axios.get(`${API}/get?rId=${searchQuery}`);
return response.data;
    }catch(error){
        console.log('Error while calling API',error.message);
        return error.response.data;
    }
}


