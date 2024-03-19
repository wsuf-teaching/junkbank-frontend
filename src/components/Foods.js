import FoodListItem from "./FoodListItem";
import { ClipLoader } from "react-spinners";

const Foods = (props) => {

    let foods;

    if(!props.foods) {
        foods = <div className="loadingTextContainer"><ClipLoader color={'#633e35'} size={100}/><div>Loading foods...</div></div>;
    } else {
        foods = props.foods.map((food,index)=>(
            <FoodListItem food={food} key={index}/>
        ))
    }

    return (
            <main className="container">
            <section>
                <h2 className="food-list-title">Browse our great selection of meals below!</h2>
                <ul className="food-list">
                    {foods}
                </ul>
            </section>
        </main>
    );
}

export default Foods;