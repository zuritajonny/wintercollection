import React from 'react'
import { useState } from 'react'
import * as Icon from 'react-feather';


import NavBar from './NavBar';
import logo from '../media/logo.png';
import {Link} from 'react-router-dom';
import Message from './Message';


const Header = ({isLoggedIn,setIsLoggedIn,alertHandler}) => {
  
  const [sidebar, setSidebar] = useState(false)
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
                <div>
                <div className={searchBar ? ' sbar-container bar-active' : 'sbar-container'}>
                {
                  searchBar ? 
                    <Icon.X className='search-icon icon' onClick={searchHandler}/> 
                    :
                    <Icon.Search className='search-icon icon' onClick={searchHandler}/> 
                  }
                </div>

                
                
                </div>

                <div>
                    <Link to='/'><img src={logo} alt="" className='logo'/></Link>
                
                </div>

                <div className='asds'>
                <NavBar
                  hideMenu={hideMenu}
                  sidebar={sidebar}
                  setSidebar={setSidebar}
                />
                
               
                
                </div>
              

                  
            </header>

              <div className={searchBar ? ' search-overlay ' : ''}>
                
                <div 
                  onClick={searchHandler}
                  className={searchBar ? 'search-bar search-bar-active' : 'search-bar'}
                >
                    <input type="text" placeholder='Vintage, hoodies, elegance...' className='search-input'/>
                    <button className='search-button'>Search</button>
                </div>

                
              </div>
            

          {/*   {wasClicked ?    <div className='asd'> */}
           
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