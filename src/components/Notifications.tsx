import { FC } from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import { selectNotifications } from "../store/notifications.slice";

const Notifications: FC<any> = ({children}) => {
    const notifications = useSelector(selectNotifications);

    return (
        <div>
            {
                notifications.map((notification) => (
                    createPortal(
                        <h2 key={notification.id}>{notification.content}</h2>, 
                        document.querySelector("#add-to-cart-animation")!
                    )                
                ))
            }
        </div>
    );
}

export default Notifications;