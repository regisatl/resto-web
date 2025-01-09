import React, {useEffect, useState} from 'react';
import {BsStarFill, BsStarHalf} from "react-icons/bs";
import Button from "./Button.jsx";

const DishesCard = (props) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {

        const timeout = setTimeout(() => setIsVisible(true), 1000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div
            className={`w-full h-auto p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg transform transition-all duration-[2000ms] ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}
        >
            <img
                className={`rounded-xl w-full h-auto object-cover transform transition-all duration-[2000ms] ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
                }`}
                src={props.img}
                alt="img"
            />
            <div className="space-y-4">
                <h3 className="font-semibold text-center text-xl pt-6">{props.title}</h3>
                <div className="flex flex-row justify-center">
                    <BsStarFill className="text-brightColor"/>
                    <BsStarFill className="text-brightColor"/>
                    <BsStarFill className="text-brightColor"/>
                    <BsStarFill className="text-brightColor"/>
                    <BsStarHalf className="text-brightColor"/>
                </div>
                <div className="flex flex-row items-center justify-center gap-4">
                    <h3 className="font-semibold text-lg">{props.price}</h3>
                    <Button title="Buy Now"/>
                </div>
            </div>
        </div>

    );
};

export default DishesCard;
