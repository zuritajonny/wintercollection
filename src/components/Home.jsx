
import Header from './Header';
import Footer from './Footer';
import Landing from './Landing';
import Sections from './Sections';







const Home = ({isLoggedIn,setIsLoggedIn,alertHandler}) => {
  
  /* const array = useSelector(state => state.guests) */
  /* console.log("Accediendo al state global desde home")
  console.log(array) */
  

  


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