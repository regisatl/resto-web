import React, {useEffect, useState} from "react";
import {FiMoon, FiSun} from "react-icons/fi";

function getInitialTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        return savedTheme === "dark";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
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
            {isDarkMode ? <FiMoon size={24}/> : <FiSun size={24}/>}
        </button>
    );
};

export default DarkModeToggle;
