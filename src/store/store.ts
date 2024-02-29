import { configureStore } from "@reduxjs/toolkit";
import orderReducer from './order.slice';
import notificationsReducer from './notifications.slice';

export default configureStore({
    reducer: {
        orders: orderReducer,
        notifications: notificationsReducer
    }
});