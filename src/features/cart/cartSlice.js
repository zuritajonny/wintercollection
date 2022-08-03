import { createSlice } from "@reduxjs/toolkit";

const cartProducts = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [] ,
    cartTotalQuantity: 0,
    cartTotalAmout: 0,
    message: '',
}



export const cartSlice = createSlice({
    name: 'cart',
    initialState: cartProducts,
    reducers: {
        addProduct: (state,action) => {
            
                const itemIndex = state.cartItems.findIndex(
                    (product) => product.id === action.payload.id
                );

                if(itemIndex >= 0 ){
                    state.message = 'Already in the cart!'
                    

                }else{
                    const actualProduct = {...action.payload, productQuantity: 1}
                    state.cartItems.push(actualProduct);
                    state.message = 'Added to the cart!'
                    
                }

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
            
        },increaseProduct: (state,action) => {

            const productIndex = state.cartItems.findIndex(
                (product) => product.id === action.payload.id
            );


                state.cartItems[productIndex].productQuantity += 1;



        },
        decreaseProduct: (state,action) => {
            const itemIndex = state.cartItems.findIndex(
                (product) => product.id === action.payload.id
            )

            if(state.cartItems[itemIndex].productQuantity > 1 ){

                state.cartItems[itemIndex].productQuantity -= 1;

            }else if(state.cartItems[itemIndex].productQuantity === 1){

                const tempCartProducts = state.cartItems.filter(
                    (product) => product.id !== action.payload.id
                )
                state.cartItems = tempCartProducts
                
            }

        },
        removeFromCart: (state,action) => {
                const newCartList = state.cartItems.filter(
                    product => product.id !== action.payload.id
                )
                state.cartItems = newCartList

                localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        clearCart: (state, action) => {
            state.cartItems = []
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        }
        
    }

})

export const {addProduct,removeFromCart,increaseProduct,decreaseProduct,clearCart} = cartSlice.actions 


export default cartSlice.reducer