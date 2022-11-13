const { configureStore, createReducer } = require("@reduxjs/toolkit");
import uiReducer from './uiCart-slice'
import cartReducer from './cart-slice'


const store = configureStore({
    reducer:{
        cart:cartReducer,
        ui:uiReducer
    }

})

export default store