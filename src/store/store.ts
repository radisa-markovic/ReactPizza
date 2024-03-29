import { configureStore } from "@reduxjs/toolkit";
import orderReducer from './order.slice';

export default configureStore({
    reducer: {
        orders: orderReducer
    }
});