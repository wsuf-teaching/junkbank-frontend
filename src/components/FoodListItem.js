import { useContext } from "react";
import FoodListItemForm from "./FoodListItemForm";
import CartContext from "../context/cart-context";

const FoodListItem = (props) => {

    const {food} = props;
    //const food = props.food;

    const cartContext = useContext(CartContext);

    const addToCartHandler = amount => {
        cartContext.addItem({
            id: food.id,
            name: food.name,
            amount: amount,
            price: food.price
        });
    }


    return (
        <li className="food-card">
            <div className="img-wrapper-col">
                <img src={food.imageUrl} alt="food"/>
            </div>
            <article className="food-card-col">
                <h4>{food.name}</h4>
                <p className="food-description">{food.description}</p>
                <div className="food-price">Price: EUR <span>{food.price}</span></div>
            </article>
            <FoodListItemForm onAddToCart={addToCartHandler}/>
        </li>
    );
}

export default FoodListItem;