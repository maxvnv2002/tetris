import React from 'react';
import classNames from "classnames";
import classes from './Popup.module.scss'
import {icons} from "../../constants/icons";
import SmallButton from "../../UIKit/SmallButton";
const Popup = ({children, title, anotherButton, buttonHandler}) => {
    return (
        <div className={classNames(classes.wrapper)}>
            <div className={classNames(classes.menu)}>
                <p className={classNames(classes.title)}>{title}</p>
                { children }
                { anotherButton ? anotherButton : (
                    <SmallButton onClick={buttonHandler} image={icons.back}/>
                ) }
            </div>
        </div>
    );
};

export default Popup;