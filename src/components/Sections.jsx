import React from 'react'
import coats from '../media/coats.jpeg'
import casualM3 from '../media/casualM3.jpg'
import casualW5 from '../media/casualW5.jpg'
import glasses from '../media/glasses.jpg'
import fashion from '../media/elegantM.jpg'
import fashionW from '../media/elegantW2.jpg'

const Sections = () => {
  return (
    <div className='sections-container'>



        <section className='section'>
      
        <img src={casualM3} alt="" className='section-image'/>
        
        <div className='section-content'>
            <h3>Casual for HIM</h3>

        </div>

        </section>

        <section className='section'>
      
      <img src={casualW5} alt="" className='section-image'/>
      
      <div className='section-content'>
          <h3>Casual for HER</h3>

      </div>

      </section>

      <section className='section'>
      
      <img src={glasses} alt="" className='section-image'/>
      
      <div className='section-content'>
          <h3>Glasses</h3>

      </div>

     </section>

    <section className='section'>
        
        <img src={coats} alt="" className='section-image'/>
        
        <div className='section-content'>
            <h3>Coats</h3>

        </div>

    </section>
        

    <section className='section'>
      
      <img src={fashion} alt="" className='section-image'/>
      
      <div className='section-content'>
          <h3>Elegance for MEN</h3>

      </div>

  </section>
  <section className='section'>
      
      <img src={fashionW} alt="" className='section-image'/>
      
      <div className='section-content'>
          <h3>Elegance for Women</h3>

      </div>

  </section>


    </div>
  )
}

export default Sections