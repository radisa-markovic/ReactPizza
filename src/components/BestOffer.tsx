import { FC } from "react";

const PIZZA_URL: string = "https://www.southernliving.com/thmb/3x3cJaiOvQ8-3YxtMQX0vvh1hQw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2652401_QFSSL_SupremePizza_00072-d910a935ba7d448e8c7545a963ed7101.jpg"
const bestOfferStyle: React.CSSProperties = {
    objectFit: "cover",
    width: "100%",
    height: "100%"
};

const ingredientsStyle: React.CSSProperties = {
    listStyle: "none",
    display: "flex",
    justifyContent: "space-between",
    margin: "10px auto"
};


const BestOffer: FC<{}> = () => {
    return(
        <article>
            <h1 style={{
                textAlign: "left",
                fontSize: "40px"
            }}>
                Najbolja ponuda
            </h1>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <div style={{height: "300px"}}>
                    <img 
                        src={PIZZA_URL} 
                        alt="Image of pizza" 
                        style={bestOfferStyle}
                    />    
                </div>     
                <div>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <h2>Porodicna kapricoza</h2>       
                        <p>500 RSD</p>
                    </div>
                    <ul style={ingredientsStyle}>
                        <li>Kackavalj</li>
                        <li>Kackavalj</li>
                        <li>Kackavalj</li>
                    </ul>
                    <div className="size-and-count">
                        <select name="sizeSelect" id="sizeSelect">
                            <option value="familySize">Porodicna (66cm)</option>
                            <option value="mediumSize">Srednja (50cm)</option>
                            <option value="smallSize">Mala (40cm)</option>
                        </select>
                        <span>X</span>
                        <input type="number" name="pizzaCount"/>
                    </div>
                    <button style={{
                        display: "block",
                        width: "100%",
                        fontSize: "30px"
                    }}>
                        Dodaj u korpu
                    </button>
                </div>
            </div>
        </article>
    );
}

export default BestOffer;