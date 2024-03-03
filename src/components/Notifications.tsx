import { FC } from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import { selectNotifications } from "../store/notifications.slice";

const Notification: FC<{id: number | string, content: string}> = (
    { id, content }
) => {
    return (
        <div>
            <p style={{fontSize: "36px"}}>{ content }</p>
        </div>
    );
}

const Notifications: FC<any> = ({children}) => {
    const notifications = useSelector(selectNotifications);

    return (
        <div>
            {
                notifications.map((notification) => (
                    createPortal(
                        <Notification 
                            id={notification.id}
                            content={notification.content}
                        />, 
                        document.querySelector("#add-to-cart-animation")!
                    )                
                ))
            }
        </div>
    );
}

export default Notifications;