import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppState } from "../models/AppState";

interface Notification
{
    id: string,
    content: string
}

export interface NotificationsState
{
    notifications: Notification[]
}

const initialState: NotificationsState = {
    notifications: []
};

const notificationsSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
        addNotification: (state, action: PayloadAction<Notification>) => {
            state.notifications.push(action.payload);
        },
        removeNotification: (state, action: PayloadAction<{id: string}>) => {
            state.notifications = state.notifications.filter((notification) => notification.id !== action.payload.id);
        }
    }
});

export const selectNotifications = (state: AppState) => state.notifications.notifications;

export const { addNotification, removeNotification } = notificationsSlice.actions;
export default notificationsSlice.reducer;