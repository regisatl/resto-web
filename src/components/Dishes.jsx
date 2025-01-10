import React from 'react';
import DishesCard from "../layouts/DishesCard.jsx";
import img1 from "../assets/images/img1.jpg"
import img2 from "../assets/images/img2.jpg"
import img3 from "../assets/images/img3.jpg"
import img4 from "../assets/images/img1.jpg"
import img5 from "../assets/images/img2.jpg"
import img6 from "../assets/images/img3.jpg"

const Dishes = () => {

    return (
        <>
            <div className="flex flex-col justify-center px-5 pb-5 lg:px-72 dark:bg-slate-900">
                <h1 className="text-4xl font-semibold text-center pt-10 pb-10 dark:text-gray-200">Our Dishes</h1>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                   <DishesCard img={img1} title="Spaghetti Carbonara" price="$10.99"/>
                   <DishesCard img={img2} title="Caesar Salad" price="$10.99"/>
                   <DishesCard img={img3} title="Margherita Pizza" price="$10.99"/>
                   <DishesCard img={img4} title="Spaghetti Carbonara" price="$10.99"/>
                   <DishesCard img={img5} title="Caesar Salad" price="$10.99"/>
                   <DishesCard img={img6} title="Tasty Dish" price="$10.99"/>
               </div>
            </div>
        </>
    )

}
export default Dishes