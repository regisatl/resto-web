import React from 'react';
import img from '../assets/images/img8.jpg';
import Button from "../layouts/Button.jsx";
import '../App.css';

const About = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8 about-image">
            <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-6 dark:bg-slate-800">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 dark:text-gray-200">Why Choose Us?</h2>
                    <p className="text-gray-600 leading-relaxed mb-4 dark:text-gray-200">
                        At Resto Web, we pride ourselves on delivering exceptional services tailored to meet
                        your unique needs. Our team of dedicated professionals ensures a seamless and satisfying
                        experience,
                        prioritizing quality and customer satisfaction above all else. Whether you're seeking
                        innovation,
                        reliability, or expertise, we've got you covered.
                    </p>
                    <p className="text-gray-600 leading-relaxed dark:text-gray-200">
                        We go above and beyond to exceed expectations, using state-of-the-art technology and industry
                        best practices.
                        Choose us for our commitment to excellence, our passion for innovation, and our unwavering focus
                        on building
                        long-lasting relationships with our clients. Join us and discover why we are the trusted choice
                        for so many!
                    </p>
                    <div className="flex justify-center mt-4">
                        <Button title="Learn More"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
