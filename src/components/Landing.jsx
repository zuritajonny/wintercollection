import React from 'react'
import landingimg from '../media/landing.jpg'
import { Link } from 'react-router-dom'
import { useSelector} from "react-redux";

const Landing = ({alertHandler}) => {
  const myGuests = useSelector (state => state.guests)

  
  

  return (
    <div>
        <section className='landing-page'>
            <img src={landingimg} alt="" className='landing-image'/> 
            
            <div className='content'>
                {myGuests.map(myGuest =>(
                  <h1>Welcome <span>{myGuest.name}!</span></h1>
                ))}

                <h2>Here is the new  <span>Winter Collection</span></h2>
                
                <Link to='/wintercollection'>
                  <button className='button' onClick={alertHandler}>
                      Pre-order
                  </button>
                </Link>
            </div>
      </section>
    </div>
  )
}

export default Landing