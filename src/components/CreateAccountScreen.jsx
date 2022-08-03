import React from 'react';
import { useState } from 'react';
import Header from './Header';
import * as Icon from 'react-feather'
import { useNavigate } from 'react-router-dom';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import { addGuest } from "../features/guests/guestSlice";

const CreateAccountScreen = ({setIsLoggedIn}) => {
  
  
  
  const [name,setName] = useState('')
  const [lookingFor,setLookingFor] = useState('')
  const [isRegistered, setIsRegistered] = useState(true)

  const guests = useSelector(state => state.guests)
  
  const triggerAction = useDispatch()

  let navigate = useNavigate()

  const genID = () =>{
    const random = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(36)

    return random + fecha
  }

  

  const handleForm = (e) => {
    e.preventDefault();
    

    if([name,lookingFor].includes('')){
      alert('All fields are mandatory.')
      return
    }

    const newGuest = {
      name,
      lookingFor,
      id: genID(),
      isRegistered
    }

    /* setGuest([...guest,newGuest]) */  
    triggerAction(addGuest(newGuest))
    console.log(guests)
    
    
   setName('')
    setLookingFor('')
    setIsLoggedIn(false)
    
    navigate('/')
  }

  return (
    <div>
        <Header
          
        />
        
        <form
          className='form-container' 
          onSubmit={handleForm}
        >
          <div className='form-wrapper'>
            <label 
              htmlFor="name"
              className='label-text'
              >
                WHAT IS YOUR NAME?
            </label>

            <input 
              className='input-form'
              type="text" 
              placeholder='Name here'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          
          <div className='form-wrapper form-wrapper2'>
          <label 
              
              className='label-text'
              >
                WHICH TYPES OF CLOTHES ARE YOU LOOKING FOR?
            </label>

            <div className='checkbox-container'>
              FOR HIM
              <input 
                className='checkbox'
                type="radio" 
                name='lookingFor'
                value='male'
                onChange={(e) => setLookingFor(e.target.value)}
              />
            </div>
            
            <div className="checkbox-container">
              FOR HER
              <input 
                  className='checkbox'
                  type="radio" 
                  name='lookingFor'
                  value='female'
                  onChange={(e) => setLookingFor(e.target.value)}
                />
            </div>
          
            <div className="checkbox-container">
                FOR BOTH
                <input 
                  className='checkbox'
                  type="radio" 
                  name='lookingFor'
                  value='both'
                  onChange={(e) => setLookingFor(e.target.value)}
                />
              </div>
            </div>
            

          <button
            className='submit-button'
            type='submit'
          >
            Save
            <Icon.ArrowRight className='icon'/>
          </button>

          

        </form>

        {/* <p>Termino el form</p> */}

        
   

        


     
    </div>
  )
}

export default CreateAccountScreen