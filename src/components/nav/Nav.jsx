import {useState} from 'react';
import {NavLink} from "react-router-dom";

import DarkModeButton from "../darkModeButton/DarkModeButton.js";

import './nav.css';

import openButton from "./../../images/nav-buttons/menu-burger.svg";
import closeButton from "./../../images/nav-buttons/close.svg";

function Nav() {
    
    const [visible, setVisible] = useState(false);
    const [none, setNone] = useState(true);

    const openMenu = (e) => {
        setNone(!none);
        setVisible(!visible);
    }

    const closeMenu = (e) => {
        setNone(!none);
        setVisible(!visible);
    }

    return (
        <nav className="nav">
            <div className="container">
                <div className={visible ? 'nav-row open' : 'nav-row'}>
                    <NavLink to="/" className="nav-logo">
                        <strong>Real Estate Shit</strong>
                    </NavLink>
                    
                    <ul className="nav-list">
                        <li><NavLink to="/" className={({isActive}) => isActive ? 'nav-list-item active' : 'nav-list-item' } onClick={closeMenu}>Home</NavLink></li>
                        <li><NavLink to="/projects" className={({isActive}) => isActive ? 'nav-list-item active' : 'nav-list-item' } onClick={closeMenu}>Projects</NavLink></li>
                        <li><NavLink to="/contacts" className={({isActive}) => isActive ? 'nav-list-item active' : 'nav-list-item' } onClick={closeMenu}>Contacts</NavLink></li>
                    </ul>
                    <button className="nav-button" onClick={openMenu}>
                        <img src={openButton} alt="nav-open" />
                        <img src={closeButton} alt="nav-close" className={none ? 'none' : ''} />
                    </button>

                    <DarkModeButton />
                </div>    
            </div>
        </nav>
    );
}

export default Nav;