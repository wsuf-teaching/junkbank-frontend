import Header from '../components/Header';
import Hero from '../components/Hero';
import Foods from '../components/Foods';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import CartModal from '../components/CartModal';

const MainPage = () => {

    const [foods, setFoods] = useState();

    useEffect(()=>{
        fetch("http://localhost:5000/foods")
            .then(response => response.json())
            .then(data => setFoods(data))
            .catch(error => console.log(error));
    },[]);

    const [modalIsShown, setModalIsShown] = useState(false);

    const toggleModal = () => {
        setModalIsShown((prevModalIsShown)=>!prevModalIsShown);
    }

    return (
        <>
            { modalIsShown && <CartModal onToggleModal={toggleModal}/>}
            <Header onToggleModal={toggleModal}/>
            <Hero/>
            <Foods foods={foods}/>
            <Footer/>
        </>
    );
}

export default MainPage;