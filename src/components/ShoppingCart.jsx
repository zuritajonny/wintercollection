import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { addProduct,removeFromCart,increaseProduct,decreaseProduct,clearCart } from '../features/cart/cartSlice';
import * as Icon from 'react-feather';
import { Link } from "react-router-dom";

const ShopCart = ({openCart,activateCart}) => {

  const users = useSelector (state => state.guests)
  const products = useSelector (state=>state.cart)

  const formatNumber = (number) => {
    return Number(number).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
}
  
  

  const dispatch = useDispatch()
  
  const incrementProductNumber = (product) =>{
    dispatch(increaseProduct(product))
    
  }

  const decreaseProductNumber = (product) => {
    dispatch(decreaseProduct(product))
  }
    
  const removeItem = (product) => {
      dispatch(removeFromCart(product))
  }

  const clearCartProducts = () => {
      
      dispatch(clearCart())
  }



    


  return (
    <>
    <div 
      onClick={openCart}
      className={activateCart ? "cart-overlay" : ''}
    >
    </div>
   

    <div className={activateCart ? 'cart-container cart-container-active' : 'cart-container' }>
            <div className="x icon">
            <Icon.X
              onClick={openCart}
            />
            </div>
          
          {
            products.cartItems.length > 0 ? 
            <>
              {
                users.length>0 ? 
                users.map(user=>(
                  <h3>Here is your shopping cart, <span>{user.name}!</span></h3>
                ))
                :
                <h3>Here is your shopping cart!</h3>
              }
             

              <ul className='cart-guidelines'>
                <li className='cart-guide'></li>
                <li className='cart-guide'>Product name</li>
                <li className='cart-guide'>Quantity</li>
                <li className='cart-guide'>Price</li>
              </ul>

              <div className='products-container'>
                {
                    products.cartItems.map(product=>(
                      <ul
                        className='cart-product-items'  
                        key={product.id}
                      >
                        <li className='cart-item'><img src={product.articleImg} className='cart-img' alt="" /></li>
                 
                          <li className='cart-item'>{product.articleName}</li>
                          
                 



                        <div className="product-quantity cart-item">
                          <button 
                            className='quantity-button cart-item'
                            onClick={() => decreaseProductNumber(product)}
                          >-</button>

                            <div className='q-container'>
                              <li className='cart-item'>{product.productQuantity}</li>
                            </div>

                          <button 
                            className='quantity-button cart-item'
                            onClick={() => incrementProductNumber(product)}
                          >+</button>

                        </div>{/* ({product.articlePrice * product.productQuantity} */}
                        
                        <li className='cart-item cart-item-price'><Icon.DollarSign size='20px'/>{ product.articlePrice * product.productQuantity }</li>

                        <li className='cart-item xicon'>
                          <Icon.XCircle 
                            
                            className='icon remove-cart-item '
                            onClick={() => removeItem(product)}
                          />
                        </li>
                        
                      </ul>
                    ))
                  }


              </div>
                        <div className="cart-buttons">
                          <div className='clear-cart'>
                            <button 
                              className='clear-button checkout-button'
                              onClick={clearCartProducts}
                              
                              >
                              <Icon.X/><span>Clear your cart</span>
                            </button>
                          </div>

                          <div className='checkout'>
                            <button className='checkout-button'>
                              <Icon.CreditCard/> <span>Checkout  </span>
                            </button>
                          </div>
                        </div>
            </>
            : 
              users.length>0 ?
              <div className='cart-warning'>
              
                {users.map(user =>(
                            <p className=''><span>{user.name},</span> your cart is empty!</p>
                          ))}

                <button 
                    onClick={openCart}
                    className='cart-warning-button'  
                  >
                    <span>Go back</span> <Icon.ArrowLeft/>
                  </button>
                  
                </div>
              :
              <div className='cart-warning'>
                <p className=''>UPS! Looks like your cart is empty</p>

                <button 
                  onClick={openCart}
                  className='cart-warning-button'  
                >
                  <span>Go back</span> <Icon.ArrowLeft/>
                </button>
              </div>


          }
          
          
          
    
    </div>
    </>

  )
}

export default ShopCart;