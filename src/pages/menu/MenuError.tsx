import { FC } from "react";
import { useRouteError } from "react-router-dom";
import MenuHeader from "./MenuHeader";

const MenuError: FC<{}> = () => {
    const error: any = useRouteError();

    return (
        <>
            <MenuHeader/>
            <h1>Meni Greska: { error.message }</h1>
        </>
    );
}

export default MenuError;