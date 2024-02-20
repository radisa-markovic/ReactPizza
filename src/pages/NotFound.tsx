import { FC } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const NotFound: FC<{}> = () => {
    return (
        <div>
            <Header/>
            <h1>Stranica nije pronadjena</h1>
            <Link 
                to={"/"} 
                style={{fontSize: "25px"}}
            >
                Idi na naslovnu
            </Link>
        </div>
    );
}

export default NotFound;