import React from 'react';
import classes from './LargeButton.module.scss'
import {Link} from "react-router-dom";

const LargeButton = ({ children, image, link }) => {
    return (
        <Link
            to={link}
            className={classes.button}
        >
            {children}
            <span>{image}</span>
        </Link>
    );
};

export default LargeButton;