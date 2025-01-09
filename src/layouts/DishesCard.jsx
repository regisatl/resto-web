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
            className={`pb-5 rounded-t-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg transform transition-all duration-[2000ms] ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}
        >
            <div>
                <img
                    className={`w-full h-auto rounded-t-lg object-cover transform transition-all duration-[2000ms] ease-out ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
                    }`}
                    src={props.img}
                    alt="img"
                />
                <div className="space-y-4 px-6 pt-6">
                    <h3 className="font-semibold text-xl">{props.title}</h3>
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        <div className="flex flex-row">
                            <BsStarFill className="text-brightColor"/>
                            <BsStarFill className="text-brightColor"/>
                            <BsStarFill className="text-brightColor"/>
                            <BsStarFill className="text-brightColor"/>
                            <BsStarHalf className="text-brightColor"/>
                        </div>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                        <h3 className="font-semibold text-lg">{props.price}</h3>
                        <Button title="Buy Now"/>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default DishesCard;
