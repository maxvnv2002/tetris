import React from 'react';
import classes from "./SettingsPopup.module.scss";
import ProgressGroup from "../ProgressGroup";

const SettingsPopup = ({children, title}) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.menu}>
                <p className={classes.title}>{title}</p>
                <ProgressGroup/>
                { children }
            </div>
        </div>
    );
};

export default SettingsPopup;