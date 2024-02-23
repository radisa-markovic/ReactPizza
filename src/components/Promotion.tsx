import { FC } from "react";
import PromoArticle from "../pages/menu/MenuItem";
import { PIZZA_URL } from "../pages/LandingPage";
import { API_BASE_URL } from "../constants";
import { useLoaderData } from "react-router-dom";
import Pizza from "../models/Pizza";

const Promotion: FC<{}> = () => {
    const promotionItems = useLoaderData() as Pizza[];

    const PromotionArticles = promotionItems.length > 0 && promotionItems.map((promotionItem) => (
        <PromoArticle
            id={promotionItem.id}
            imageURL={promotionItem.imageURL}
            name={promotionItem.name}
            ingredients={promotionItem.ingredients}
            pricePerItem={promotionItem.pricePerItem}
        />
    ));

    return (
        <div>
            <div style={{backgroundColor: "#FF6B00", paddingBottom: "30px"}}>
                <div style={{
                    display: "flex",
                    margin: "auto",
                    width: "95%"
                }}>
                    <div className="cta-and-description">
                        <h1 style={{fontSize: "88px", textAlign: "left"}}>
                            Najbolje pice, sendviči i dezerti
                        </h1>
                        <div className="buttons-holder">
                            <button>Poruči</button>
                            <button>Pozovi</button>
                        </div>
                    </div>
                    <div className="image-holder"
                        style={{maxWidth: "50%"}}
                    >
                        <img src={PIZZA_URL} 
                            style={{width: "100%", height: "100%", objectFit: "cover"}}
                            alt="" 
                        />
                    </div>
                </div>
            </div>

            <article style={{width: "95%", margin: "auto", paddingBottom: "50px"}}>
                <h2 style={{
                    textAlign: "left",
                    fontSize: "64px"
                }}>
                    Trenutno na akciji:
                </h2>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gap: "30px"
                }}>
                    { PromotionArticles }
                </div>
            </article>
        </div>
    );
}

export default Promotion;

export async function loadPromotionItems()
{
   const response = await fetch(API_BASE_URL + "/pizzas?_limit=3");
   const promotionItems = await response.json();

   return promotionItems;
}