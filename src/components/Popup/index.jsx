import React from 'react';
import classNames from "classnames";
import classes from './Popup.module.scss'
const Popup = ({children, title}) => {
    return (
        <div className={classNames(classes.wrapper)}>
            <div className={classNames(classes.menu)}>
                <p className={classNames(classes.title)}>{title}</p>
                { children }
            </div>
        </div>
    );
};

export default Popup;