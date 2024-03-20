import { useContext } from 'react';
import CartItem from './CartItem';
import classes from './CartModal.module.css';
import CartContext from '../context/cart-context';

const CartModal = (props) => {

    const cartContext = useContext(CartContext);

    const totalAmount = `€ ${cartContext.totalAmount}`;

    const hasItems = cartContext.items.length > 0;

    const cartItemRemoveHandler = id => {
        cartContext.removeItem(id);
    }

    const cartItemAddHandler = item => {
        cartContext.addItem({...item, amount:1});
    }

    const cartItems = cartContext.items.map(item => (
        <CartItem 
            key={item.id} 
            name={item.name} 
            amount={item.amount} 
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
        />
    ));

    const handleOrder = () => {
        const street = document.getElementById("street").value;
        const city = document.getElementById("city").value;
        const zip = document.getElementById("zip").value;

        if(street === "" || city === "" || zip === "") {
            window.alert("Please fill your address");
            return;
        }

        const newOrder = {
            street, 
            city, 
            zip,
            items: cartContext.items
        };

        console.log(newOrder);
        alert("Your order was successful!");
        cartContext.clearCart();
        props.onToggleModal();
    }

    return (
        <div className={classes['modal-container']}>
            <div className={classes.backdrop} onClick={props.onToggleModal}>
            </div>
            <div className={classes.modal}>
                {!hasItems && <h2 className={classes.heading}>Your cart is empty!</h2>}
                {hasItems && 
                <>
                    <h2 className={classes.heading}>Items in your cart:</h2>
                    <ul className={classes.cartList}>
                        {cartItems}
                    </ul>
                </>
                }

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
                        <button className={classes.orderButton} onClick={handleOrder}>Order</button>
                        <button className={classes.cancelButton} onClick={props.onToggleModal}>Close</button>
                </section>

            </div>
        </div>
    );
}

export default CartModal;