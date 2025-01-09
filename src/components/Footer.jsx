import React from "react";
import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn} from "react-icons/fa";

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
                            <li><a href="#home" className="hover:text-gray-300">Home</a></li>
                            <li><a href="#menu" className="hover:text-gray-300">Menu</a></li>
                            <li><a href="#about" className="hover:text-gray-300">About Us</a></li>
                            <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
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
                        <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700">
                            <FaFacebookF/>
                        </a>
                        <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700">
                            <FaTwitter/>
                        </a>
                        <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700">
                            <FaInstagram/>
                        </a>
                        <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700">
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
