import React from "react";
import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn} from "react-icons/fa";
import {Link} from "react-scroll";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="container mx-auto px-5 lg:px-20">
                <div className="flex flex-col lg:flex-row justify-between gap-10">
                    {/* Section About */}
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-4">About Us</h3>
                        <p className="text-gray-400">
                            We are passionate about bringing you the best dining experience. From our carefully curated
                            menu to our exceptional service, we aim to make every moment memorable.
                        </p>
                    </div>

                    {/* Section Useful Links */}
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-4">Useful Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="home" spy={true} smooth={true} duration={2000} className="hover:text-brightColor cursor-pointer transition-all durantion-300 hover:border-b-2 border-brightColor">Home</Link></li>
                            <li><Link to="menu" spy={true} smooth={true} duration={2000} className="hover:text-brightColor cursor-pointer transition-all durantion-300 hover:border-b-2 border-brightColor">Menu</Link></li>
                            <li><Link to="about" spy={true} smooth={true} duration={2000} className="hover:text-brightColor cursor-pointer transition-all durantion-300 hover:border-b-2 border-brightColor">About Us</Link></li>
                            <li><Link to="contact" spy={true} smooth={true} duration={2000} className="hover:text-brightColor cursor-pointer transition-all durantion-300 hover:border-b-2 border-brightColor">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Section Contact */}
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-4">Contact</h3>
                        <p className="text-gray-400">123 Foodie Street, Gourmet City</p>
                        <p className="text-gray-400">Phone: +1 234 567 890</p>
                        <p className="text-gray-400">Email: contact@foodie.com</p>
                    </div>
                </div>

                {/* Social Media Icons */}
                <div className="mt-10 border-t border-gray-700 pt-5 text-center">
                    <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                    <div className="flex justify-center gap-4">
                        <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-brightColor transition-all duration-700">
                            <FaFacebookF/>
                        </a>
                        <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-brightColor transition-all duration-700">
                            <FaTwitter/>
                        </a>
                        <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-brightColor transition-all duration-700">
                            <FaInstagram/>
                        </a>
                        <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-brightColor transition-all duration-700">
                            <FaLinkedinIn/>
                        </a>
                    </div>

                    {/* Footer Bottom */}
                    <p className="mt-5 text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Restaurant Web. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
