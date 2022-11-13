const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    showCart: false
}
const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleCart(state) {
            state.showCart = !state.showCart
        }
    }

})

const uiActions = uiSlice.actions
export default uiSlice.reducer