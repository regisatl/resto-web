import React from 'react';
import img1 from "../assets/images/img1.jpg"
import img2 from "../assets/images/img2.jpg"
import img3 from "../assets/images/img3.jpg"
import img4 from "../assets/images/img4.jpg"
import Button from "../layouts/Button.jsx";

const Menu = () => {
    const menuItems = [
        {
            id: 1,
            name: "Spaghetti Carbonara",
            description: "Classic Italian pasta dish with creamy sauce and crispy bacon.",
            price: "$12.99",
            image: img1,
        },
        {
            id: 2,
            name: "Margherita Pizza",
            description: "Fresh mozzarella, basil, and tomato sauce on a crispy crust.",
            price: "$9.99",
            image: img2,
        },
        {
            id: 3,
            name: "Caesar Salad",
            description: "Crisp romaine lettuce, croutons, parmesan, and creamy Caesar dressing.",
            price: "$7.99",
            image: img3,
        },
        {
            id: 4,
            name: "Grilled Salmon",
            description: "Perfectly grilled salmon served with seasonal vegetables.",
            price: "$15.99",
            image: img4,
        },
    ];

    return (
        <div className="bg-gray-100 py-12 px-4 lg:px-24">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Menu</h2>
                <p className="text-gray-600">Explore our carefully crafted dishes, made with love and the finest
                    ingredients.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {menuItems.map((item) => (
                    <div key={item.id}
                         className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-700">
                        <img src={item.image} alt={item.name} className="w-full h-auto object-cover"/>
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                            <p className="text-gray-600 mt-2">{item.description}</p>
                            <div className="mt-4 flex items-center justify-between">
                                <span className="text-lg font-bold text-brightColor">{item.price}</span>
                                <Button title="Order" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menu;
