import React from 'react'
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom'


const Message = ({mensaje,alertHandler,isLoggedIn}) => {


  return (
        <div className={isLoggedIn ? 'sign hactive' : 'sign'}>
            <p className='warning'>{mensaje}</p>
            <p className='warning'>(It will be quick, promise)</p>
            <div className='button-container'>
            <button className='buttonWelcome1'><Link onClick={alertHandler} className='color' to='/createaccount'><Icon.ArrowRight/></Link></button>
            <button className='buttonWelcome2' onClick={alertHandler}><Icon.X/></button>
            </div>
        </div> 
  )
}

export default Message