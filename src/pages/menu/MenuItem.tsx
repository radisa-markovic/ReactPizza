import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/order.slice";
import Notifications from "../../components/Notifications";
import { addNotification, removeNotification } from "../../store/notifications.slice";
import { nanoid } from "@reduxjs/toolkit";

const MenuItem: FC<{id: number, name: string, pricePerItem: number, ingredients: string[], imageURL: string}> = ({
    id, name, pricePerItem, imageURL, ingredients
}) => {
    const dispatch = useDispatch();
    const [itemQuantity, setItemQuantity] = useState<number>(0);
    const [itemIsAdded, setItemIsAdded] = useState<boolean>(false);

    const onItemAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { target } = event;
        setItemQuantity(Number(target.value) || 0);
    }

    const addToCart = () => {
        dispatch(addItem({
            id,
            imageURL,
            name, 
            ingredients,
            pricePerItem,
            itemQuantity
        }));

        const notificationID = nanoid();

        dispatch(addNotification({
            id: notificationID,
            content: "Alert " + name
        }));

        setTimeout(() => {
            dispatch(removeNotification({
                id: notificationID
            }));
        }, 3000);
    }

    const IngredientsList = ingredients.map((ingredient) => (
        <li style={{
            fontSize: "26px"
        }}>
            {ingredient}
        </li>
    ));

    return (
        <article className="promo-article"
            style={{
                boxShadow: "0 0px 1px hsla(0, 0%, 0%, 0.2), 0 1px 2px hsla(0, 0%, 0%, 0.2)",
                paddingBottom: "10px"
            }}
        >
            <div className="image-holder">
                <img src={imageURL} alt="" 
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                    }}
                    loading="lazy"
                />
            </div>
            <div className="container"
                style={{
                    width: "95%", 
                    margin: "auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px"
                }}
            >
                <h3 style={{
                    fontSize: "36px",
                    fontWeight: "700",
                    textAlign: "left",
                    margin: "0",
                    padding: "0"
                }}>
                    {name}
                </h3>
                <ul className="ingredients-list"
                    style={{
                        listStyle: "none",
                        display: "flex",
                        flexWrap: "wrap",
                        margin: "0",
                        padding: "0",
                        gap: "10px"
                    }}
                >
                    { IngredientsList }
                </ul>
                <div className="size-and-count"
                    style={{
                        display: "flex",
                        justifyContent: "space-between"
                    }}
                >
                    <select name="sizeSelect" id="sizeSelect">
                        <option value="familySize">Porodična (66cm)</option>
                        <option value="mediumSize">Srednja (50cm)</option>
                        <option value="smallSize">Mala (40cm)</option>
                    </select>
                    <span>X</span>
                    <input 
                        type="number" 
                        name="pizzaCount"
                        value={itemQuantity}
                        onChange={onItemAmountChange}
                    />
                </div>
                <div className="flex-group"
                    style={{
                        display: "flex",
                        justifyContent: "space-between"
                    }}
                >
                    <span style={{
                        fontSize: "32px"
                    }}>{pricePerItem} RSD</span>
                    <button className="add-to-card"
                        style={{
                            backgroundColor: "orange",
                            fontSize: "26px",
                            padding: "5px 10px"
                        }}
                        onClick={addToCart}
                    >
                        Poruči
                    </button>
                </div>
            </div>
        </article>
    );
}

export default MenuItem;