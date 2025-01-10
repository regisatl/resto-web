import React, { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    return (
        <button
            onClick={toggleDarkMode}
            className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-800 dark:text-gray-200 transition-colors duration-300"
            aria-label="Toggle Dark Mode"
        >
            {isDarkMode ? <FiMoon size={24} /> : <FiSun size={24} />}
        </button>
    );
};

export default DarkModeToggle;
