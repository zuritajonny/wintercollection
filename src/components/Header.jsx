import React from 'react'
import { useState } from 'react'



import NavBar from './NavBar';
import logo from '../media/logo.png';
import {Link} from 'react-router-dom';
import Message from './Message';
import SearchBar from './SearchBar';


const Header = ({isLoggedIn,setIsLoggedIn,alertHandler}) => {
  
  const [sidebar, setSidebar] = useState(false)

  const toggleView = () => {
    setSidebar(!sidebar);
  }


  const [searchBar,setSearchBar] = useState ();


  const searchHandler = () => {
    setSearchBar(!searchBar)
  }

  const hideMenu = () => {
    if(window.scrollY >= 5){
      setSidebar(false)
    }
  }
  window.addEventListener('scroll', hideMenu)

  return (
    <div>
        

        
            <header className='header-container '>
                {/* "Buscar", Home, "Winter Clothing", "Discover", "Stores", el buscar a la izquierda, logo en el medio
                y nav a la derecha */}
                
                {/* <div className={searchBar ? ' sbar-container bar-active' : 'sbar-container'}> */}
                  {/* {
                    searchBar ? 
                      <Icon.X className='search-icon icon' onClick={searchHandler}/> 
                      :
                      <Icon.Search className='search-icon icon' onClick={searchHandler}/> 
                    } */}

                    <SearchBar
                      searchBar={searchBar}
                      searchHandler={searchHandler}
                    />

             {/*    </div> */}

                
                
                

                <div>
                    <Link to='/'><img src={logo} alt="" className='logo'/></Link>
                
                </div>

                <div className='navbar-container'>
             
                
                 <NavBar
                  toggleView={toggleView}
                  hideMenu={hideMenu}
                  sidebar={sidebar}
                  
                 />
                
                </div>
              

                  
            </header>

             <div className={searchBar ? ' search-overlay ' : ''}>
                 
             </div> 
                <div 
                  
                  className={searchBar ? 'search-bar search-bar-active' : 'search-bar'}
                >
                    <input type="text" placeholder='Vintage, hoodies, elegance...' className='search-input'/>
                    <button className='search-button'>Search</button>
                </div>

             
            

                    {/*   {wasClicked ?    <div className='asd'> */}
{/* 
                    <div className={searchBar ? ' search-overlay ' : ''}>
              </div>
                <div 
                  onClick={searchHandler}
                  className={searchBar ? 'search-bar search-bar-active' : 'search-bar'}
                >
                    <input type="text" placeholder='Vintage, hoodies, elegance...' className='search-input'/>
                    <button className='search-button'>Search</button>
                </div> */}


          
           
           <Message 
                  mensaje='Welcome! would you like to register first?'
                  isLoggedIn={isLoggedIn}
                  alertHandler={alertHandler}
                />

                
     {/*      </div>: ''} */}
            
         


                 {/* {isLoggedIn && <Message mensaje='Debes llenar todos los campos!'/> } */}
{/*             {!isLoggedIn ? 
              <div className='header-sign'>
              <span onClick={alertHandler} className='warning'>Create an account </span>to start buying! Do you already have one? <Link to='/Login'>Log in!</Link>
            </div>        
            : ''}
 */}    </div>
  )
}

export default Header