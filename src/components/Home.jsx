import {useState} from 'react'
import Header from './Header';
import Footer from './Footer';
import Landing from './Landing';
import Sections from './Sections';
import { useNavigate } from 'react-router-dom';
import CreateAccountScreen from './CreateAccountScreen'
import { useSelector,useDispatch } from "react-redux";




const Home = ({isLoggedIn,setIsLoggedIn,alertHandler}) => {
  
  const array = useSelector(state => state.guests)
  /* console.log("Accediendo al state global desde home")
  console.log(array) */
  let navigate = useNavigate();

  


  return (
    

      
      
      <div className='home-container'>
        <Header
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          alertHandler={alertHandler}
          
        />  
        <Landing
        alertHandler={alertHandler}
        
        />
        <Sections/>
        <Footer/>
        
        </div>
      
      


  

    
  )
}

export default Home