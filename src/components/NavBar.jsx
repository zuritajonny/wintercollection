import React from 'react'
import { useState } from 'react';
import * as Icon from 'react-feather';
import {MenuData} from '../helpers/MenuData'
import { Link } from 'react-router-dom';

const NavBar = ({sidebar,setSidebar}) => {

    


    const toggleView = () => {
        setSidebar(!sidebar);
    }

  return (
    <div className='navbar'>
       
        <Icon.Menu 
            className='menu-bar icon'
            onClick={toggleView}
        /> 
     
        

        <div 
            onClick={toggleView}
            className={sidebar? 'overlay' : ''}
        >
        <nav className={sidebar ? 'nav-menu active ' : 'nav-menu'}>
            <ul className='nav-menu-items'>
                <li 
                    className='x-toggle icon'
                    onClick={toggleView}
                >
                    <Icon.X/>
                </li>
                {MenuData.map((item,index) =>{
                    return(
                        <Link to={item.path} key={index}>
                        <li  className={item.cName}>
                            
                                {item.icon}
                                <span>{item.name}</span>

                            
                        </li>         
                        </Link>
                    )
                })}
            </ul>

        </nav>
        </div>
        
       
    </div>
  )
}

export default NavBar