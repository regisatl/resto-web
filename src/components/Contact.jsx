import React, {useState} from 'react';
import Input from '../layouts/Input.jsx';
import Button from "../layouts/Button.jsx";


const Contact = () => {

    const [formData, setFormData] = useState({name: "", email: ""});
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.email) newErrors.email = "Email is required";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            console.log("Form submitted successfully:", formData);
            setErrors({});
        }
    };

    return (
        <>
            <div className="dark:bg-slate-900 py-8">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">Contact-Us</h2>
                    <p className="text-gray-600 dark:text-gray-200">Explore our carefully crafted dishes, made with love and the finest
                        ingredients.</p>
                </div>
                <form className="md:max-w-2xl lg:max-w-3xl mx-auto p-4 border dark:border-slate-800 dark:bg-slate-800 dark:shadow-2xl rounded-lg shadow-md" onSubmit={handleSubmit}>
                    <Input
                        id="name"
                        name="name"
                        label="Full Name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        error={errors.name}
                    />
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        label="Email Address"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
                    />
                    <div className="mb-5">
                        <label htmlFor="comments" className="block text-gray-700 dark:text-gray-200 font-medium mb-2">Comments</label>
                        <textarea
                            id="comments"
                            name="comments"
                            placeholder="Write your comments here"
                            rows="5"
                            className="w-full dark:bg-slate-800 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
                        ></textarea>
                    </div>
                    <Button title="Submit"/>
                </form>
            </div>
        </>
    )

}

export default Contact;