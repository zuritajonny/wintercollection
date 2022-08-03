import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import * as Icon from 'react-feather';
import {useDispatch,useSelector} from 'react-redux';
import { addProduct } from '../features/cart/cartSlice';

const Post = ({article,setHaveBought,haveBought,setAnimateWarning,setShowCart}) => {

  const product = useSelector(state => state.cart)
  const message = useSelector(state => state.cart.message) 
  const dispatch = useDispatch()

  
  
  console.log(message)

  const {articleImg,articleName,articlePrice,id} = article

  const handleCart = (e) => {
    e.preventDefault()

      
    setHaveBought(true)
    setAnimateWarning(true)

    setTimeout(() =>{
      
      setAnimateWarning(false)
      
      
    }, 2500);

    
    const newProduct = {
      id,
      articleName,
      articlePrice,
      articleImg,
    }
    
    dispatch(addProduct(newProduct))

    /* console.log(id)
    console.log(isInCart) */
    

  }

  return (
      
        <div className='post-wrapper'>

            <div className='img-wrapper'>
              <img src={articleImg} alt="" className='post-img'/>
            </div>
            <div className='container'>

            <p className='post-name'>{articleName}</p>

            <p className='post-name'><Icon.DollarSign size='20px'/>{articlePrice}</p>
       
            </div>
            
         
           
              
              <button
                className='cart'
                onClick={handleCart}
              
              >
                <AiOutlineShoppingCart
                          className='s-cart'
                    />
                <span>add to cart</span>
                </button> 
      </div>
    
  )
}

export default Post