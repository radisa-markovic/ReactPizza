import { FC } from "react";
import { Link, NavLink } from "react-router-dom";
import '../header.css';
import useRemovePage from "../uselessHooks/useRemovePage";
import useAlcohol from "../uselessHooks/useAlcohol";
import { useDispatch, useSelector } from "react-redux";
import { confirmOrder, selectOrderItems, selectPrice } from "../store/order.slice";
import { nanoid } from "@reduxjs/toolkit";
import Pizza from "../models/Pizza";

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
    const orderedItems = useSelector(selectOrderItems) as Pizza[];

    const ItemsInOrder = orderedItems.length === 0
    ? <p>No items ordered</p>
    : orderedItems.map((orderedItem) => (
        <li className="order__item">
            <div className="order__image-holder">
                <img 
                    src={orderedItem.imageURL} 
                    alt="" 
                />
            </div>
            <div className="order__details">
                <p className="order__title">{ orderedItem.name }</p>
                <p>{ orderedItem.mediumSizePrice } RSD</p>
                <div className="progress-bar"></div>
            </div>
        </li>
    ));

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
            <Link to="/">
                <div className="logo-holder">
                    <img 
                        src={COMPANY_LOGO} 
                        alt="logo"
                        className="logo-image" 
                    />
                </div>
            </Link>
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
                </ul>
            </nav>
            <button className="shopping-cart-toggler has-dropdown">
                <div className="shopping-cart-image-holder">
                    <img 
                        src="./Kolica.png" 
                        alt="Shopping cart icon" 
                    />
                    <span className="ordered-items-counter">
                        { orderedItems.length || 0 }
                    </span>
                </div>
                <ul className="dropdown" style={{
                    left: 'initial', right: 0, top: '50px',
                    backgroundColor: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    maxHeight: '150px',
                    overflowY: 'scroll'
                }}>
                    { ItemsInOrder }
                    { 
                        orderedItems.length > 0 &&
                        <Link to="/checkout">
                            Go to checkout
                        </Link>                        
                    }
                </ul>
            </button>
        </header>
    );
}

export default Header;