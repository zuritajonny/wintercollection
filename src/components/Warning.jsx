import React from 'react'
import * as Icon from 'react-feather';
import { useSelector } from "react-redux";


function Warning({animateWarning}) {

  const warningMessage = useSelector (state => state.cart.message)
  
  

  return (
    <div className={animateWarning ? warningMessage=='Already in the cart!' ? 'cart-alert cart-check' : 'cart-alert ' : 'cart-alert animate-cart'}>
        <Icon.Check/><p>{warningMessage}</p>
    </div>
  )
}

export default Warning