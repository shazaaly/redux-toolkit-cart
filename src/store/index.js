
import uiReducer from './uiCart-slice'
import cartReducer from './cart-slice'
const { configureStore } = require("@reduxjs/toolkit");



const store = configureStore({
    reducer: {
        cart: cartReducer,
        ui: uiReducer
    }

})

export default store