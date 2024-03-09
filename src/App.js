import './layout.css';
import './navbar.css';
import './hero.css';
import './foodlist.css';
import './footer.css';

function App() {

  return (
    <>
        <header className="header">
            <nav className="nav">
                <ul className="menu container">
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
                        <a href="./signin.html">Login</a>
                    </li>
                    <li className="item">
                        <a href="./signup.html">Sign up</a>
                    </li>
                    <li className="item cart-button">
                        <a href="#">Cart (<span>0</span>)</a>
                    </li>
                    <li className="toggle">
                        <a>
                            <i className="fas fa-bars"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>

        <section className="hero-wrapper">
            <div className="container">
                <div className="herobox">
                    <h1>Order food!</h1>
                    <p>
                        Indulge in Your Guilty Pleasures with JunkBank's Exclusive Junk Food Delivery Service!!
                    </p>
                </div>
            </div>
        </section>


        <main className="container">
            <section>
                <h2 className="food-list-title">Browse our great selection of meals below!</h2>
                <ul className="food-list">
                    <li className="food-card">
                        <div className="img-wrapper-col">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1920px-Good_Food_Display_-_NCI_Visuals_Online.jpg" alt="food"/>
                        </div>
                        <article className="food-card-col">
                            <h4>Pizza</h4>
                            <p className="food-description">Pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, baked.</p>
                            <div className="food-price">Price: EUR <span>10</span></div>
                        </article>
                        <form className="add-to-cart-col">
                            <input
                                    type="number"
                                    min="1"
                                    step="1"/>
                            <button>+ Add</button>
                        </form>
                    </li>
                    <li className="food-card">
                        <div className="img-wrapper-col">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Fish_and_chips_blackpool.jpg/275px-Fish_and_chips_blackpool.jpg" alt="food"/>
                        </div>
                        <article className="food-card-col">
                            <h4>Fish and chips</h4>
                            <p className="food-description">Fish and chips is a hot dish consisting of fried fish in batter, served with chips. The dish originated in England, where these two components had been introduced from separate immigrant cultures.</p>
                            <div className="food-price">Price: EUR <span>15</span></div>
                        </article>
                        <form className="add-to-cart-col">
                            <input
                                    type="number"
                                    min="1"
                                    step="1"/>
                            <button>+ Add</button>
                        </form>
                    </li>
                    <li className="food-card">
                        <div className="img-wrapper-col">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Fried_chicken%2C_fried_okra_and_mac_%26_cheese_from_Mary_Mac%27s_Tea_Room_in_Atlanta.jpg/1920px-Fried_chicken%2C_fried_okra_and_mac_%26_cheese_from_Mary_Mac%27s_Tea_Room_in_Atlanta.jpg" alt="food"/>
                        </div>
                        <article className="food-card-col">
                            <h4>Fried chicken</h4>
                            <p className="food-description">Fried chicken, also known as Southern fried chicken, is a dish consisting of chicken pieces that have been coated with seasoned flour or batter and pan-fried, deep fried, pressure fried, or air fried.</p>
                            <div className="food-price">Price: EUR <span>8</span></div>
                        </article>
                        <form className="add-to-cart-col">
                            <input
                                    type="number"
                                    min="1"
                                    step="1"/>
                            <button>+ Add</button>
                        </form>
                    </li>
                    <li className="food-card">
                        <div className="img-wrapper-col">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/4/47/Hamburger_%28black_bg%29.jpg" alt="food"/>
                        </div>
                        <article className="food-card-col">
                            <h4>Hamburger</h4>
                            <p className="food-description">A hamburger, or simply burger, is a food consisting of fillings—usually a patty of ground meat, typically beef—placed inside a sliced bun or bread roll.</p>
                            <div className="food-price">Price: EUR <span>13</span></div>
                        </article>
                        <form className="add-to-cart-col">
                            <input
                                    type="number"
                                    min="1"
                                    step="1"/>
                            <button>+ Add</button>
                        </form>
                    </li>
                </ul>
            </section>
        </main>

        <footer className="footer">
            <div className="container footer-content">
                <section>
                    <img src="junkbanklogo.png" alt="junkbank"/>
                    <h2>JunkBank</h2>
                </section>
                <section className="left-align-col">
                    <h3>Company</h3>
                    <ul>
                        <li>About us</li>
                        <li>Careers</li>
                        <li>Investors</li>
                    </ul>
                </section>
                <section className="left-align-col">
                    <h3>Useful links</h3>
                    <ul>
                        <li>About us</li>
                        <li>Careers</li>
                        <li>Investors</li>
                    </ul>
                </section>
                <section className="left-align-col">
                    <h3>Social</h3>
                    <ul>
                        <li>Facabook</li>
                        <li>Twetter</li>
                        <li>TikTak</li>
                    </ul>
                </section>
            </div>
        </footer>
    
    </>
  );
}

export default App;
