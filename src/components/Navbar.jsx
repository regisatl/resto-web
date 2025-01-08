import React, {useState} from 'react';
import {Link} from 'react-scroll';
import {BiChevronDown, BiRestaurant} from "react-icons/bi";
import Button from "../layouts/Button.jsx";
import {AiOutlineClose, AiOutlineMenuUnfold} from "react-icons/ai";

const Navbar = () => {

    const [menu, setMenu] = useState(false);
    const handleChange = () => {
        setMenu(!menu);
    };
    const closeMenu = () => {
        setMenu(false);
    };

    return (
        <>
            <div className="fixed w-full">
                <div>
                    <div
                        className="flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgba(0,0,0,0.2)]">
                        <div className="flex flex-row items-center cursor-pointer">
                            <span>
                                <BiRestaurant size={32}/>
                            </span>
                            <h1 className="text-xl font-semibold">RestoWeb</h1>
                        </div>
                        <nav className="hidden md:flex flex-row items-center sm:text-sm lg:text-lg font-medium gap-8">
                            <Link to="home" spy={true} smooth={true} duration={500}
                                  className="hover:text-brightColor transition-all duration-300 cursor-pointer">Home</Link>
                            <div className="relative group z-40">
                                <div className="flex items-center gap-1">
                                    <Link
                                        to="dishes"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        className="hover:text-brightColor transition-all duration-300 cursor-pointer"
                                    >
                                        Dishes
                                    </Link>
                                    <div className="transition-transform duration-300 group-hover:rotate-180">
                                        <BiChevronDown size={25}/>
                                    </div>
                                </div>
                                <ul
                                    className="absolute hidden group-hover:flex flex-col space-y-2 bg-white border border-gray-300 rounded-lg py-3 w-[200px] shadow-lg"
                                >
                                    <li className="w-full">
                                        <Link
                                            to="dishes"
                                            spy={true}
                                            smooth={true}
                                            duration={500}
                                            className="block hover:bg-brightColor text-brightColor hover:text-white transition-all duration-700 cursor-pointer w-full px-4 py-1"
                                        >
                                            Spicy
                                        </Link>
                                    </li>
                                    <li className="w-full">
                                        <Link
                                            to="dishes"
                                            spy={true}
                                            smooth={true}
                                            duration={500}
                                            className="block hover:bg-brightColor text-brightColor hover:text-white transition-all duration-700 cursor-pointer w-full px-4 py-1"
                                        >
                                            Tasty
                                        </Link>
                                    </li>
                                    <li className="w-full">
                                        <Link
                                            to="dishes"
                                            spy={true}
                                            smooth={true}
                                            duration={500}
                                            className="block hover:bg-brightColor text-brightColor hover:text-white transition-all duration-700 cursor-pointer w-full px-4 py-1"
                                        >
                                            Delicious
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <Link to="about" spy={true} smooth={true} duration={500}
                                  className="hover:text-brightColor transition-all duration-300 cursor-pointer">About</Link>
                            <Link to="menu" spy={true} smooth={true} duration={500}
                                  className="hover:text-brightColor transition-all duration-300 cursor-pointer">Menu</Link>
                            <Link to="reviews" spy={true} smooth={true} duration={500}
                                  className="hover:text-brightColor transition-all duration-300 cursor-pointer">Reviews</Link>
                            <Button title="Contactez-nous"/>
                        </nav>
                        <div className="md:hidden flex items-center z-20 text-brightColor">
                            {menu ? (<AiOutlineClose size={25} onClick={handleChange}/>) : (
                                <AiOutlineMenuUnfold size={25} onClick={handleChange}/>)}

                        </div>
                    </div>
                    <div
                        className={`${
                            menu ? "translate-x-0" : "-translate-x-full"
                        } lg:hidden flex flex-col absolute bg-white text-brightColor left-0 top-15 z-0 shadow-lg font-semibold text-2xl text-center pt-8 pb-4 px-3 gap-8 w-full h-fit transition-transform duration-700`}
                    >
                        <Link to="home" spy={true} smooth={true} duration={500}
                              className="hover:bg-brightColor text-brightColor hover:text-white py-2 px-3 rounded transition-all duration-300 cursor-pointer">Home</Link>
                        <Link
                            to="dishes"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="hover:text-brightColor transition-all duration-300 cursor-pointer"
                        >
                            Dishes
                        </Link>
                        <Link to="about" spy={true} smooth={true} duration={500}
                              className="hover:text-brightColor transition-all duration-300 cursor-pointer">About</Link>
                        <Link to="menu" spy={true} smooth={true} duration={500}
                              className="hover:text-brightColor transition-all duration-300 cursor-pointer">Menu</Link>
                        <Link to="reviews" spy={true} smooth={true} duration={500}
                              className="hover:text-brightColor transition-all duration-300 cursor-pointer">Reviews</Link>
                        <Button title="Contactez-nous"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
