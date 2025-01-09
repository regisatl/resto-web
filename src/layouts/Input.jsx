import React from 'react';

const Input = ({
                   id,
                   name,
                   type = "text",
                   label,
                   placeholder,
                   value,
                   onChange,
                   error
               }) => {
    return (
        <div className="w-full mb-4">
            {label && (
                <label
                    htmlFor={id}
                    className="block text-gray-700 font-medium mb-2"
                >
                    {label}
                </label>
            )}
            <input
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`w-full border ${
                    error ? "border-brightColor" : "border-brightColor"
                } rounded-lg p-3 focus:outline-none focus:ring-2 ${
                    error ? "focus:ring-brightColor" : "focus:ring-brightColor"
                }`}
            />
            {error && (
                <p className="text-brightColor text-sm mt-1">{error}</p>
            )}
        </div>
    );
};

export default Input;
