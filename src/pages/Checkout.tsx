import { FC, useState } from "react";
import { useSelector } from "react-redux";
import Pizza from "../models/Pizza";
import { changeItemQuantity, selectOrderItems, selectPrice, updateOrder } from "../store/order.slice";
import '../checkout.css';
import { useDispatch } from "react-redux";

const Checkout: FC<{}> = () => {
    const [itemAmount, setItemAmount] = useState(1);

    const dispatch = useDispatch();
    const orderedItems = useSelector(selectOrderItems) as Pizza[];
    const totalPrice = useSelector(selectPrice);

    const ItemsInOrder = orderedItems.length === 0
    ? <p>No items ordered</p>
    : orderedItems.map((orderedItem) => (
        <li className="checkout__item">
            <div className="checkout__image-holder">
                <img 
                    src={orderedItem.imageURL} 
                    alt="" 
                />
            </div>
            <div className="checkout-item__details">
                <div>
                    <h2 className="checkout__title">
                        { orderedItem.name }
                    </h2>
                    <p className="checkout__ingredients">
                        { 
                            orderedItem.ingredients.map((ingredient) => (
                                ingredient + ","
                            )) 
                        }
                    </p>
                </div>
                <div className="checkout__price-holder">
                    { orderedItem.pricePerItem } &times; 
                    <input 
                        type="number" 
                        name="checkoutItemQuantityChange"
                        value={orderedItem.itemQuantity}
                        onChange={(e) => {
                            dispatch(changeItemQuantity({
                                itemName: orderedItem.name,
                                itemQuantity: Number(e.target.value)
                            })
                            )
                        }}
                        style={{
                            maxWidth: "45px",
                            padding: "5px",
                            textAlign: "center"
                        }}    
                    /> 
                    = { orderedItem.pricePerItem * orderedItem.itemQuantity } RSD
                </div>
                <button 
                    className="checkout__remove-item"
                    //@ts-ignore
                    onClick={() => dispatch(updateOrder({
                        items: orderedItems.filter((item) => item.id !== orderedItem.id),
                    }))}
                >
                    &times;
                </button>
            </div>
        </li>
    ));

    return (
        <main className="checkout__holder">
            <h1>Checkout</h1>
            <ul className="checkout__items">
                { ItemsInOrder }
            </ul>
            <hr className="checkout__separator"/>
            <p>Total price: { totalPrice }</p>
            <button className="checkout__button">
                Confirm order
            </button>
        </main>
    );
}

export default Checkout;