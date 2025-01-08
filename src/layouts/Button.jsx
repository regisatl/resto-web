import React from 'react';

const Button = (props) => {
    return (
        <>
            <div>
                <button
                    className="px-6 py-1 border-2 border-brightColor text-brightColor hover:bg-brightColor hover:text-white transition-all duration-500 rounded-full sm:hidden lg:block">
                    {props.title}
                </button>
            </div>
        </>
    )
}

export default Button
