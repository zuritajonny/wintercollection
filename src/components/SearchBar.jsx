import React from 'react'
import * as Icon from "react-feather";

const SearchBar = ({searchBar,searchHandler}) => {
  return (
    <div>
        
        <div 
          onClick={searchHandler}
          className='search-container'>
        {
               
               searchBar ? 
                 <Icon.X className='search-icon icon' /> 
                 :
                 <Icon.Search className='search-icon icon' /> 
               }


        </div>



           
    </div>
  )
}

export default SearchBar