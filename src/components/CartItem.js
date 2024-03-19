import classes from "./CartItem.module.css";

const CartItem = () => {
    return (
        <li className={classes.cartListItem}>
            <div className={classes.cartListItemTitle}>
                <h2>Pizza</h2>
            </div>
            <div className={classes.plusminusform}>
                <button className={classes.plusminus}>−</button>
                <input type="number" className={classes['cart-item-amount']} disabled value={5}/>
                <button className={classes.plusminus}>+</button>
            </div>
        </li>
    );
}

export default CartItem;