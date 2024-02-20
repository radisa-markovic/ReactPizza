import { FC } from "react";
import { Outlet } from "react-router-dom";
import MenuHeader from "../pages/menu/MenuHeader";

const MenuLayout: FC<{}> = () => {
    return(
        <>
            <MenuHeader/>
            <Outlet/>
        </>
    );
}

export default MenuLayout;