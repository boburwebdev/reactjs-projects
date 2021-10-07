import React from 'react';
import { FaPizzaSlice } from 'react-icons/fa';
import logo from '../../assets/img/logo.png';

const Header = () => {
    return (
        <header className="header" data-testid="header">
            <nav className="header__nav">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="settings">
                    <ul className="settings__list">
                        <li className="settings__list_item">+</li>
                        <li className="settings__list_item">
                            <FaPizzaSlice />
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;
