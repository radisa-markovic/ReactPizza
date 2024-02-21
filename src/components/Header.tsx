import { FC } from "react";
import { NavLink } from "react-router-dom";
import '../header.css';
import useRemovePage from "../uselessHooks/useRemovePage";
import useAlcohol from "../uselessHooks/useAlcohol";
import { useDispatch, useSelector } from "react-redux";
import { confirmOrder, selectOrderItems, selectPrice } from "../store/order.slice";

const HAMBUGER_MENU = "https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp";
const COMPANY_LOGO = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Pizza_Hut_classic_logo.svg/200px-Pizza_Hut_classic_logo.svg.png"
const navigationStyle: React.CSSProperties = {
    marginRight: "2.5%",
    marginLeft: "auto"
};

const navigationList: React.CSSProperties = {
    listStyle: "none",
    display: "flex",
    justifyContent: "space-between",
};

const headerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    margin: "auto",
    backgroundColor: "#FF6B00"
};

const hamburgerMenuStyle: React.CSSProperties = {
    maxWidth: "100px",
    maxHeight: "100px"
};

const navigationItem: React.CSSProperties = {
    // margin: "5px 10px",
    // padding: "10px",
    // fontSize: "25px",
    // textDecoration: "none",
    // color: "white"
};

const Header: FC<{}> = () => {
    const dispatch = useDispatch();
    const totalPrice = useSelector(selectPrice);
    const orderItems = useSelector(selectOrderItems) as any[];

    const HamburgerMenu = () => (
        <>
            <label 
                htmlFor="navigationToggler" 
                className="hamburger-menu"
            >
                <img 
                    src="./Hamburger menu.png" 
                    alt="" 
                />
            </label>
            <input 
                type="checkbox" 
                name="navigationToggler" 
                id="navigationToggler" 
            />
        </>
    )

    return (
        <header className="header">
            <div className="logo-holder">
                <img 
                    src={COMPANY_LOGO} 
                    alt="logo"
                    className="logo-image" 
                />
            </div>
            { HamburgerMenu() }
            <nav 
                className="main-navigation"
                id="main-navigation"
            >
                <ul className="navigation__list" style={navigationList}>
                    <NavLink 
                        to={"/"} 
                        className="navigation__item"
                        style={navigationItem}
                    >
                        Naslovna
                    </NavLink>
                    <NavLink
                        to={"/menu/pizzas"} 
                        className="navigation__item"
                        style={navigationItem}
                    >
                        Meni
                    </NavLink>
                    <li 
                        className="navigation__item"
                        style={navigationItem}
                    >
                        <button onClick={() => alert("Klik")}>
                            Pozovi
                        </button>
                    </li>
                    <li style={navigationItem}>
                        {/* <button onClick={() => alert("Shopping cart (not implemented)")}>
                            Shopping cart
                        </button> */}
                        <p>Ukupna cena: { Number(totalPrice) || 0 } RSD</p>
                        { orderItems.map((item) => (
                            <div>
                                <div>Ime: {item.name}</div>
                                <div>{item.pricePerItem} RSD</div>
                            </div>
                        )) }
                    </li>
                </ul>
            </nav>
            <button className="shopping-cart-toggler has-dropdown">
                <img src="./Kolica.png" alt="" />
                <ul className="dropdown">
                    <li className="order__item">
                        <h2>Pizza</h2>
                        <button 
                            onClick={() => alert("Klik")}
                        >
                            Klik
                        </button>
                    </li>
                </ul>
                <button 
                    style={{marginTop: "100px"}} 
                    //@ts-ignore
                    onClick={() => dispatch(confirmOrder({name: "aaaa"})).unwrap()}
                >
                    Confirm order
                </button>
            </button>
        </header>
    );
}

export default Header;