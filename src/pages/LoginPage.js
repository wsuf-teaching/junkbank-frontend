import { Link } from 'react-router-dom';
import './signin.css';

const LoginPage = () => {
    return (
        <div class="body-wrapper">
            <section class="login-card">
                <img src={process.env.PUBLIC_URL + "/images/junkbanklogo.png"} class="logo" alt="logo"/>
                <h1>Login to JunkBank!</h1>
                <form class="form" action="/login" method="POST">
                    <label for="email">
                        E-mail:
                    </label>
                    <input type="email" name="email" id="email" required/>
    
                    <label for="password">
                        Password:
                    </label>
                    <input type="password" name="password" id="password" required/>
    
                    <button type="submit">Log in</button>
                </form>
                <Link to="/signup">Sign up instead</Link>
            </section>
        </div>
    );
}

export default LoginPage;