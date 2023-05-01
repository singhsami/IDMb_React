import React from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


const Banner = () => {
  return (
    <div className='bg-image'>
    <div  className='bg-text'>
    
    <h1 className="bg-title">Search Recipes & More</h1>
    <p className='bg-textH1'>Word's Leading Recipe Plateform</p>
        <Button  as ={ Link } to="/recipes" color="pink" content="SEARCH   RECIPES"/>
    </div>
    </div>
  )
}

export default Banner