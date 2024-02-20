import { FC } from "react";
import { NavLink } from "react-router-dom";

const MenuHeader: FC<{}> = () => {
    return(
        <>
            <h1 style={{
                fontSize: "50px",
                fontWeight: "700",
                textAlign: "center"
            }}>
                Meni
            </h1>
            <div style={{
                display: "flex", 
                justifyContent: "space-between", 
                maxWidth: "95%", 
                margin: "auto"}}
            >
                <NavLink 
                    style={{fontSize: "30px"}} 
                    to={"/menu/pizzas"}
                >
                    Pice
                </NavLink>
                <NavLink 
                    style={{fontSize: "30px"}} 
                    to={"/menu/pancakes"}
                >
                    Palačinke
                </NavLink>
                <NavLink 
                    style={{fontSize: "30px"}} 
                    to={"/menu/spaghetti"}
                >
                    Špagete
                </NavLink>
                <NavLink 
                    style={{fontSize: "30px"}} 
                    to={"/menu/sandwiches"}
                >
                    Senviči
                </NavLink>
            </div>
        </>
    );
}

export default MenuHeader;