import { useSelector } from "react-redux";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    items: [],
    totalQuantity: 0,

}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload
            // check if item previously added so increase its count//
            const existingItem = state.items.find(item => item.id === newItem.id)
            if (!existingItem) {
                state.items.push({
                    itemId: newItem.id,
                    name: newItem.title,
                    quantity: newItem.quantity,
                    price: newItem.price,
                    totalPrice: newItem.price
                })

            } else {
                existingItem.quantity++
                existingItem.totalPrice = existingItem.totalPrice + existingItem.price

            }

        },
        removeItemFromCart(state, action) {
            const newItem = action.payload
            const existingItem = state.items.find(item => item.id === newItem.id)
            if (existingItem) {
                //if quant = 1 remove item from items[], if more decrease it by one //
                
                existingItem.item === 1 ? 
                state.items.filter(item => item.id != existingItem.id) : existingItem.quantity --
                

            } else {
                return Error('Item is not in Cart')
            }



        },
        RemoveAll() { },
        getItemsPrice() { },
        getTotal() { },
    }

})
export const cartActions = cartSlice.actions
export default cartSlice.reducer
