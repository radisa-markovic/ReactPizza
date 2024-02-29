import { FC } from "react"
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Notifications from "../components/Notifications";

export const  HomeLayout: FC<{}> = () => {
    /** there needs to be a notifications channel here somewhere */

    return (
        <>
            <Header/>
            <Notifications/>
            <Outlet/>
        </>
    );
}