const { createSlice } = require("@reduxjs/toolkit");

const initialState ={

}

const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers:{
        addToCart(){},
        removeItemFromCart(){},
        RemoveAll(){},
        getItemsPrice(){},
        getTotal(){},
    }

})
export const cartActions = cartSlice.actions
export default cartSlice.reducer
