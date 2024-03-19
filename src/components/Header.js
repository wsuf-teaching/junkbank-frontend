import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/cart-context";

const Header = (props) => {

    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive((prevMenuState)=>!prevMenuState);
    }

    const cartContext = useContext(CartContext);

    const numberOfCartItems = cartContext.items.reduce((acc,item)=>{
        return acc+item.amount;
    },0);

    return (
        <header className="header">
            <nav className="nav">
                <ul className={`menu container ${menuActive ? 'active' : ''}`}>
                    <li className="logo">
                        <a href="#"><img src={process.env.PUBLIC_URL + "/images/junkbanklogo.png"} alt="junkbank"/></a>
                    </li>
                    <li className="item">
                        <a href="#">About us</a>
                    </li>
                    <li className="item">
                        <a href="#">Info</a>
                    </li>
                    <li className="item">
                        <Link to="/login">Login</Link>
                    </li>
                    <li className="item">
                        <Link to="/signup">Sign up</Link>
                    </li>
                    <li className="item cart-button">
                        <a onClick={props.onToggleModal}>Cart (<span>{numberOfCartItems}</span>)</a>
                    </li>
                    <li className="toggle">
                        <a onClick={toggleMenu}>
                            <i className={`fas ${menuActive ? 'fa-times' : 'fa-bars'}`}></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;