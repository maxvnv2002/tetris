import React from 'react';
import classes from './LargeButton.module.scss'
import {Link} from "react-router-dom";

const LargeButton = ({ children, image, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={classes.button}
        >
            {children}
            <span>{image}</span>
        </button>
    );
};

export default LargeButton;