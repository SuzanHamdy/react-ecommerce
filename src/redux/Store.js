import CartSlice from './CartSlice';
import { configureStore } from "@reduxjs/toolkit";




const Store = configureStore({
    reducer :{
        allCart : CartSlice
    }
})




export default Store