import { Link } from 'react-router-dom';
import './signin.css';

const SignupPage = () => {
    return (
        <div class="body-wrapper">
            <section class="login-card">
                <img src={process.env.PUBLIC_URL + "/images/junkbanklogo.png"} class="logo" alt="logo"/>
                <h1>Sign up for JunkBank!</h1>
                <form class="form" action="/signup" method="POST">
                    <label for="email">
                        E-mail:
                    </label>
                    <input type="email" name="email" id="email" required/>
                    <label for="password">
                        Password:
                    </label>
                    <input type="password" name="password" id="password" required/>
                    <label for="password-repeat">
                        Password repeat:
                    </label>
                    <input type="password" name="password_repeat" id="password-repeat" required/>
                    <button type="submit">Sign up</button>
                </form>
                <Link to="/login">Sign in instead</Link>
            </section>
        </div>
    );
}

export default SignupPage;
