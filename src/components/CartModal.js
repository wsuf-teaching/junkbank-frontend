import { useContext } from 'react';
import CartItem from './CartItem';
import classes from './CartModal.module.css';
import CartContext from '../context/cart-context';

const CartModal = (props) => {

    const cartContext = useContext(CartContext);

    const totalAmount = `€ ${cartContext.totalAmount}`;

    const cartItems = cartContext.items.map(item => (
        <CartItem />
    ));

    return (
        <div className={classes['modal-container']}>
            <div className={classes.backdrop} onClick={props.onToggleModal}>
            </div>
            <div className={classes.modal}>
                <h2 className={classes.heading}>Items in your cart:</h2>
                <ul className={classes.cartList}>
                    {cartItems}
                </ul>

                <hr/>

                <div className={classes.cartTotal}>
                    <span>Total Amount: </span>
                    <span className={classes.totalAmount}>{totalAmount}</span>
                </div>

                <hr/>

                <section>
                    <h2 className={classes.heading}>Add a new address...</h2>
                    <form>
                        <div className={classes.newAddressForm}>
                            <input type="text" id="street" name="street" className={classes.newAddressInput}
                                    placeholder="Street"/>
                            <input type="text" id="city" name="city" className={classes.newAddressInput}
                                    placeholder="City"/>
                            <input type="text" id="zip" name="zip" className={classes.newAddressInput}
                                    placeholder="ZIP"/>
                        </div>
                    </form>
                </section>

                <section className={classes.actionButtons}>
                        <button className={classes.orderButton}>Order</button>
                        <button className={classes.cancelButton} onClick={props.onToggleModal}>Close</button>
                </section>

            </div>
        </div>
    );
}

export default CartModal;