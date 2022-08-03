import {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Warning from "./Warning";
import Post from './Post';
import ShoppingCart from "./ShoppingCart";

import { Link } from 'react-router-dom';
import { ArticleData } from "../helpers/ArticleData";
import { AiOutlineShoppingCart } from "react-icons/ai";

import logo from '../media/logo.png';

const Collection = () => {

  
  

  const [haveBought,setHaveBought] = useState();
  const [animateWarning, setAnimateWarning] = useState();
  
  const [activateHeader, setActivateHeader] = useState();
  const [openShoppingCart, setOpenShoppingCart] = useState();
  
  const [activateCart,setActivateCart] = useState();
  

  

  const changeHeader = () => {
    if(window.scrollY >= 40){
      setActivateHeader(true)
    }else{
      setActivateHeader(false)

    }
  }
  window.addEventListener('scroll', changeHeader)

  const openCart = () => {
    setOpenShoppingCart(!openShoppingCart)
    setActivateCart(false)

    setTimeout(() =>{
      
      setActivateCart(true)
      
      
    }, 200);

    

  }

  return (
    <div>
        <Header/>
        
          <div 
            className={activateHeader ? ' cart-area cart-area-active' : 'cart-area'}
          >
            <div>
                    <Link to='/'><img src={logo} alt="" className='second-logo'/></Link>
                
            </div>

          <AiOutlineShoppingCart
            className='shopping-cart'
            onClick={openCart}
          />
        </div>

        {
          openShoppingCart ? 
              <ShoppingCart
                openCart={openCart}
                activateCart={activateCart}
              />
           : '' 
        }

      <div className='collection-container'>
        
      <div className='sidebar-menu'>
          <p>Coats</p>
          <p>Casual for him</p>
          <p>Casual for her</p>
          <p>Glasses</p>
          <p>Elegance</p>
        </div>


        

        <div className='post-container'>

        
        {ArticleData.map(article=>(
          <Post
            
            article={article}
            haveBought={haveBought}
            setHaveBought={setHaveBought}
            setAnimateWarning={setAnimateWarning}
            
          />
        ))}
        </div>
        {
          haveBought && <Warning
                          animateWarning={animateWarning}
                          
                        /> 
        }
      </div>


        <Footer/>
    </div>
  )
}

export default Collection