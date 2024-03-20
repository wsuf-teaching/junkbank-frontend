import classes from "./CartItem.module.css";

const CartItem = (props) => {
    // here we have props.onAdd and props.onRemove
    return (
        <li className={classes.cartListItem}>
            <div className={classes.cartListItemTitle}>
                <h2>{props.name}</h2>
            </div>
            <div className={classes.plusminusform}>
                <button className={classes.plusminus} onClick={props.onRemove}>−</button>
                <input type="number" className={classes['cart-item-amount']} disabled value={props.amount}/>
                <button className={classes.plusminus} onClick={props.onAdd}>+</button>
            </div>
        </li>
    );
}

export default CartItem;