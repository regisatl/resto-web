import React from 'react';
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Dishes from "./components/Dishes.jsx";

function App() {
    return (
        <>
            <div>
                <Navbar/>
                <main>
                    <div id="home">
                        <Home/>
                    </div>
                </main>
            </div>
            <div id="dishes">
                <Dishes/>
            </div>
        </>
    )
}

export default App
