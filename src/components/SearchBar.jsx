import React from 'react'
import * as Icon from "react-feather";

const SearchBar = ({searchBar,searchHandler}) => {
  return (
    <div>
        
        <div className=''>
        {
               
               searchBar ? 
                 <Icon.X className='search-icon icon' onClick={searchHandler}/> 
                 :
                 <Icon.Search className='search-icon icon' onClick={searchHandler}/> 
               }


        </div>



           
    </div>
  )
}

export default SearchBar