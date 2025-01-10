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
                    className="block text-gray-700 dark:text-gray-200 font-medium mb-2"
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
                className={`w-full border dark:bg-slate-800 ${
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
