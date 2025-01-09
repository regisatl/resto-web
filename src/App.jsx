import React from 'react';
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Dishes from "./components/Dishes.jsx";
import About from "./components/About.jsx";
import Menu from "./components/Menu.jsx";
import Reviews from "./components/Reviews.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
    return (
        <>
            <div>
                <Navbar/>
                <main>
                    <div id="home">
                        <Home/>
                    </div>
                    <div id="dishes">
                        <Dishes/>
                    </div>
                    <div id="about">
                        <About/>
                    </div>
                    <div id="menu">
                        <Menu/>
                    </div>
                    <div id="reviews">
                        <Reviews/>
                    </div>
                    <div id="contact">
                        <Contact/>
                    </div>
                </main>
                <div>
                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default App
