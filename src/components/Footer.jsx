import React from 'react'
import {SocialMediaData} from '../helpers/SocialMediaData'
import logo from '../media/logo.png'
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';


const Footer = () => {

  
  

  return (
    <footer className='footer-container'>
        <div className='footer-wrapper'>
            <div className='footer-stores-wrapper'>
              <div className='footer-stores-title'>
                <Icon.Navigation/>
                <Link to='/stores'>
                  <span className='footer-stores'>Stores</span>
                </Link>
                
              </div>

                <a href="http://"><p>Venezuela</p></a>
                <a href="http://"><p>France</p></a>
                <a href="http://"><p>Canada</p></a>

            </div>
            <div className='footer-logo-container'>
                <img src={logo} alt="" className='footer-logo'/>
            </div>
            <div>
                <ul className='footer-menu-items'>
                    {SocialMediaData.map((item,index) =>{
                        return(
                           <a href={item.link}
                           key={index}>
                             <li
                            
                            className={item.cName}
                            >
                            {item.icon}
                            <span>{item.name}</span>
                        </li>
                           </a>
                        )
                    })}
                </ul>
            </div>

        </div>
    </footer>
  )
}

export default Footer