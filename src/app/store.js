import {configureStore} from '@reduxjs/toolkit'
import guestReducer from '../features/guests/guestSlice.js'
import cartReducer from '../features/cart/cartSlice.js'

export const store = configureStore({
    reducer: {
        guests: guestReducer,
        cart: cartReducer

    }
})