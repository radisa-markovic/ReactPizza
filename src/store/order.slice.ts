import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AppState } from "../models/AppState";
import { API_BASE_URL } from "../constants";
import Pizza from "../models/Pizza";
import OrderItem from "../models/OrderItem";

interface OrderState
{
    totalCost: number,
    items: OrderItem[]
}

const initialState: OrderState = {
    totalCost: 0,
    items: []
};

export const confirmOrder = createAsyncThunk("orders/confirm", async (order: any) => {
    const response = await fetch(API_BASE_URL + "/orders", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(order)
    });
    if(!response.ok) throw new Error("Order not good");

    return `${response?.status}: ${response?.statusText}`;
});

// export const updateOrder = createAsyncThunk("orders/updateOrder", async (order: {id: string | number, items: Pizza[], totalCost: number}) => {
//     // const { id } = order;

//     const response = await fetch(API_BASE_URL + "/orders/" + "1", {
//         method: "PUT",
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(order)
//     });

//     const newtorkObject = await response.json();
//     return newtorkObject;
// });

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<OrderItem>) => {
            state.items.push(action.payload);
            state.totalCost += action.payload.pricePerItem * action.payload.itemQuantity;
        },
        changeItemQuantity: (state, action: PayloadAction<{itemName: string, itemQuantity: number}>) => {
            state.totalCost = 0;

            state.items.forEach((item) => {
                if(item.name === action.payload.itemName)
                    item.itemQuantity = action.payload.itemQuantity;
        
                state.totalCost += item.pricePerItem * item.itemQuantity;
            });
        },
        updateOrder: (state, action: PayloadAction<{items: any[]}>) => {
            console.log(action.payload);
            state.items = action.payload.items;
            state.totalCost = 0;
            action.payload.items.forEach((item: any) => {
                state.totalCost += Number(item.pricePerItem) * Number(item.itemQuantity) || 0;
            })
        }
    },
    extraReducers(builder) {
        builder.addCase(confirmOrder.pending, (state, action) => {
            console.log("Order is being processed");
        }).addCase(confirmOrder.fulfilled, (state, action) => {
            state.items.push(action.payload as unknown as OrderItem);
        });
    }
});

export const selectPrice = (state: AppState) => state.orders.totalCost;
export const selectOrderItems = (state: AppState) => state.orders.items;

export const { addItem, updateOrder, changeItemQuantity } = orderSlice.actions;

export default orderSlice.reducer;