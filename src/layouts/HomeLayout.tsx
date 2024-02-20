import { FC } from "react"
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export const  HomeLayout: FC<{}> = () => {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    );
}