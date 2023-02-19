import { useState, useEffect, useRef } from 'react';

import sun from "./../../images/sun.svg";
import moon from "./../../images/moon.svg";

import "./style.css";

function DarkModeButton () {
    const [darkMode, setDarkMode] = useState('light');

    const btnRef = useRef(null);

    useEffect(() => {
        if (darkMode === 'dark') {
            document.body.classList.add('dark');
            btnRef.current.classList.add('dark-mode-btn__active');
        } else {
            document.body.classList.remove('dark');
            btnRef.current.classList.remove('dark-mode-btn__active');
        }

    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode((currentValue) => {
            return currentValue === 'light' ? 'dark' : 'light';
        });
    }

    return (
        <button ref={btnRef} className="dark-mode-btn" onClick={toggleDarkMode}>
            <img src={sun} alt="sun" className="dark-mode-btn__icon" />
            <img src={moon} alt="moon" className="dark-mode-btn__icon" />
        </button>
    );
}

export default DarkModeButton;