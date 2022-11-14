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
            state.totalQuantity++
            // check if item previously added so increase its count//
            const existingItem = state.items.find(item => item.id === newItem.id)
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    name: newItem.title,
                    quantity: 1,
                    price: newItem.price,
                    totalPrice: newItem.price
                })

            } else {
                existingItem.quantity++
                existingItem.totalPrice = existingItem.totalPrice + existingItem.price

            }

        },
        removeItemFromCart(state, action) {
            //at remove we  need only the id in payload //
            const id = action.payload
            const existingItem = state.items.find(item => item.id === id)
            state.totalQuantity--

            
                //if quant = 1 remove item from items[], if more decrease it by one //
                if (existingItem.item === 1) {
                    state.items = state.items.filter(item => item.id !== id)

                }

            else {
                existingItem.quantity--
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price



            }



        },
        RemoveAll() { },
        getItemsPrice() { },
        getTotal() { },
    }

})
export const cartActions = cartSlice.actions
export default cartSlice.reducer
