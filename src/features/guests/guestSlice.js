import { createSlice } from '@reduxjs/toolkit'


const guestsInformation = []


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