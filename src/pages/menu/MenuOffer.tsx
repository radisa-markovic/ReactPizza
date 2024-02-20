import { FC } from "react";
import { API_BASE_URL } from "../../constants";
import { useLoaderData, useParams } from "react-router-dom";
import MenuItem from "./MenuItem";
import Pizza from "../../models/Pizza";


const MenuOffer: FC<{}> = () => {
    const { meal } = useParams();
    const menuItems = useLoaderData() as Pizza[];

    return (
        <>
            <h1>{meal}: </h1>
            <section style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "20px",
                margin: "auto",
                width: "95%"
            }}>
                {
                    menuItems && menuItems.map((menuItem) => {
                        return (
                            <MenuItem
                                imageURL={menuItem.imageURL}
                                ingredients={menuItem.ingredients}
                                name={menuItem.name}
                                pricePerItem={menuItem.pricePerItem}
                            />
                        )
                    })
                }
            </section>
        </>
    );
}

export async function loadMenuItems({ params }: any) {
    const { meal } = params;

    const response = await fetch(API_BASE_URL + "/" + meal);
    if(!response.ok)
        throw Error("No response found");

    let items = await response.json();
    return items;
}

export default MenuOffer;