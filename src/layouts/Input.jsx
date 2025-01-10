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
                    error ? "border-gray-300" : "border-gray-300"
                } rounded-lg p-3 focus:outline-none focus:ring-2 ${
                    error ? "focus:ring-gray-400" : "focus:ring-gray-400"
                }`}
            />
            {error && (
                <p className="text-brightColor text-sm mt-1">{error}</p>
            )}
        </div>
    );
};

export default Input;
