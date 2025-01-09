import React from 'react';
import Button from "../layouts/Button.jsx";
import '../App.css';
const Home = () => {

    return (
        <>
            <div className="min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 hero-image">
                <div className="w-full lg:w-2/3 space-y-5">
                        <h1 className="text-gray-300 text-6xl font-semibold drop-shadow-lg">
                            Elevate Your Inner Foodie with Every Bite.
                        </h1>
                        <p className="text-gray-300 mt-4 drop-shadow-lg">
                            Discover the joy of indulging in flavors that awaken your senses. Each dish is crafted with
                            passion, bringing together the finest ingredients for an unforgettable dining experience.
                        </p>
                        <div className="mt-32">
                            <Button title="Order Now"/>
                        </div>
                </div>
            </div>
        </>
    )

}
export default Home