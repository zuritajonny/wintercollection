import { createSlice } from '@reduxjs/toolkit'


const guestsInformation = [
  /*   {
        id: 1,
        name: 'Lore',
        lookingFor: 'female',
        loggedIn: 21323 ,
    },
    {
        id: 2,
        name: 'Jonny Alejandro',
        lookingFor: 'male',
        loggedIn: true,
    },
 */
]


export const guestSlice = createSlice({
    name: 'guest',
    initialState: guestsInformation,
    reducers: {
        addGuest: (state,action) =>{
            state.push(action.payload);
        }
    }
})

export const {addGuest} = guestSlice.actions 
export default guestSlice.reducer