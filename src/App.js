import './layout.css';
import './navbar.css';
import './hero.css';
import './foodlist.css';
import './footer.css';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { Route, Routes } from 'react-router-dom';


function App() {

  return (
    <>
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/signup" element={<SignupPage/>}/>
            <Route path="*" element={<img src="https://http.cat/404"></img>}/>
        </Routes>
    </>
  );
}

export default App;
