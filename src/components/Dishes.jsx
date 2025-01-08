import React from 'react';
import DishesCard from "../layouts/DishesCard.jsx";
import img1 from "../assets/images/img1.jpg"
import img2 from "../assets/images/img1.jpg"
import img3 from "../assets/images/img1.jpg"
import img4 from "../assets/images/img1.jpg"
import img5 from "../assets/images/img1.jpg"
import img6 from "../assets/images/img1.jpg"

const Dishes = () => {

    return (
        <>
            <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
                <h1 className="text-4xl font-semibold text-center pt-24 pb-10">Our Dishes</h1>
               <div className="flex flex-wrap gap-8 justify-center">
                   <DishesCard img={img1} title="Tasty Dish" price="$10.99"/>
                   <DishesCard img={img2} title="Tasty Dish" price="$10.99"/>
                   <DishesCard img={img3} title="Tasty Dish" price="$10.99"/>
                   <DishesCard img={img4} title="Tasty Dish" price="$10.99"/>
                   <DishesCard img={img5} title="Tasty Dish" price="$10.99"/>
                   <DishesCard img={img6} title="Tasty Dish" price="$10.99"/>
               </div>
            </div>
        </>
    )

}
export default Dishes