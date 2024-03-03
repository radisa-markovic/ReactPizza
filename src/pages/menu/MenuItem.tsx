import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/order.slice";
import { addNotification, removeNotification } from "../../store/notifications.slice";
import { nanoid } from "@reduxjs/toolkit";

interface MenuItemProps
{
    id: number,
    name: string, 
    smallSizePrice: number,
    smallSizeCaption: string,
    mediumSizePrice: number,
    mediumSizeCaption: string,
    largeSizePrice: number,
    largeSizeCaption: string,
    ingredients: string[],
    imageURL: string
}

const MenuItem: FC<MenuItemProps> = ({
    id, 
    name, 
    smallSizePrice, 
    smallSizeCaption,
    mediumSizePrice,
    mediumSizeCaption, 
    largeSizePrice, 
    largeSizeCaption,
    imageURL, 
    ingredients
}) => {
    const dispatch = useDispatch();
    const [itemQuantity, setItemQuantity] = useState<number>(1);
    const [sizeCaption, setSizeCaption] = useState<string>(mediumSizeCaption);
    const [pricePerSize, setPricePerSize] = useState<number>(Number(mediumSizePrice) || 400);

    const onItemAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { target } = event;
        setItemQuantity(Number(target.value) || 0);
    }

    const onPizzaSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { target } = event;
        setPricePerSize(Number(target.value) || 400);
        /**==> experimentally discovered value */
        setSizeCaption(target.selectedOptions[0].innerText)
    }

    const addToCart = () => {
        dispatch(addItem({
            id,
            imageURL,
            name: name + " " + sizeCaption, 
            ingredients,
            pricePerItem: pricePerSize,
            itemQuantity,
            size: sizeCaption
        }));

        const notificationID = nanoid();

        dispatch(addNotification({
            id: notificationID,
            content: "Item added: " + name
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
                    <select 
                        name="sizeSelect" 
                        id="sizeSelect"
                        onChange={onPizzaSizeChange}                        
                    >
                        <option value={largeSizePrice}>   
                            {largeSizeCaption}
                        </option>
                        <option value={mediumSizePrice}>
                            {mediumSizeCaption}
                        </option>
                        <option value={smallSizePrice}>
                            {smallSizeCaption}
                        </option>
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
                    }}>{pricePerSize} RSD</span>
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