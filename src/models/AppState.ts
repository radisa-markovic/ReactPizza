import { NotificationsState } from "../store/notifications.slice";

export interface AppState
{
    orders: { items: any[], totalCost: number },
    notifications: NotificationsState
};