import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../models/AppState";

interface OrderState
{
    totalCost: number,
    items: any[]
}

const initialState: OrderState = {
    totalCost: 0,
    items: []
};

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
            state.totalCost += action.payload.pricePerItem;
        }
    }
});

export const selectPrice = (state: AppState) => state.orders.totalCost;
export const selectOrderItems = (state: AppState) => state.orders.items;

export const { addItem } = orderSlice.actions;

export default orderSlice.reducer;