import React from 'react'
import headerStyles from '../styles/Header.module.css';

const Header = () => {
    return (
        <div>
            <p className={headerStyles.description}> Whats in your Pantry? Let's find out!</p>
        </div>
    )
}

export default Header;