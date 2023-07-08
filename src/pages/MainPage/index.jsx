import React, {useEffect, useState} from 'react';
import classes from './MainPage.module.scss'
import Navigation from "../../components/Navigation";
import {Outlet} from "react-router-dom";
import Alert from "../../components/Alert";

const MainPage = () => {
    const [activeMenuClass, setActiveMenuClass] = useState(classes.menu)

    const clickHandler = () => {
        setActiveMenuClass(`${classes.menu} ${classes.click}`)
        setTimeout(() => {
            setActiveMenuClass(`${classes.menu}`)
        } , 500)
    }

    useEffect(() => {
        document.addEventListener('click', clickHandler);
        return () => {
            document.removeEventListener('click', clickHandler);
        }
    }, [])


    return (
        <div className={activeMenuClass}>
            <Navigation/>
            <Outlet/>
            <div className={classes.extraLightTopLeft}></div>
            <div className={classes.extraLightTopRight}></div>
            <div className={classes.extraLightBottomLeft}></div>
            <div className={classes.extraLightBottomRight}></div>
            <Alert/>
        </div>
    );
};

export default MainPage;