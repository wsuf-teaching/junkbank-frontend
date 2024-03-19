import { useState, useRef } from "react";

const FoodListItemForm = (props) => {

    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();
        // do something later

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = Number(enteredAmount);

        if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 10) {
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(enteredAmountNumber);
        setAmountIsValid(true);

        console.log(enteredAmountNumber);

    }

    return (
        <form className="add-to-cart-col" onSubmit={submitHandler}>
            <input
                type="number"
                min="1"
                step="1"
                ref={amountInputRef}
                style={{border: !amountIsValid && "1px solid red"}}
                />
            <button style={{border: !amountIsValid && "1px solid red"}}>+ Add</button>
        </form>
    );
}

export default FoodListItemForm;