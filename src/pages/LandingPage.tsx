import { FC } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export const PIZZA_URL: string = "https://www.southernliving.com/thmb/3x3cJaiOvQ8-3YxtMQX0vvh1hQw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2652401_QFSSL_SupremePizza_00072-d910a935ba7d448e8c7545a963ed7101.jpg"
export const DRUGA_PICA_URL: string = "https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg";

const LandingPage: FC<{}> = () => {
    return (
        <>
            <Header/>      
            <Outlet/>      
        </>
    );
}

export default LandingPage;