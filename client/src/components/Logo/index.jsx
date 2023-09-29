import React from 'react';
import logo from '../../assets/img/Tetris-logo.png'
import classes from './Logo.module.scss'
const Logo = ({className, onAnimationEnd, onClick}) => {
    return (
        <img
            src={logo}
            alt="Tetris logo"
            className={`${classes.image} ${className}`}
            onAnimationEnd={onAnimationEnd}
            onClick={onClick}
        />
    );
};

export default Logo;