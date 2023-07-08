import React from 'react';
import classes from './SmallButton.module.scss'
import Music from "../../assets/img/Music";

const SmallButton = ({ children, image, onClick, className }) => {
    return (
        <button
            className={`${classes.button} ${className}`}
            onClick={onClick}
        >
            {children && (<span>{children}</span>)}
            {image}
        </button>
    );
};

export default SmallButton;