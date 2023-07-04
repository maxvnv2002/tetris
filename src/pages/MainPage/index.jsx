import React, {useEffect, useState} from 'react';
import classes from './MainPage.module.scss'
import Navigation from "../../components/Navigation";
import {Outlet} from "react-router-dom";

const MainPage = () => {
    const [activeMenuClass, setActiveMenuClass] = useState(classes.menu)
    useEffect(() => {
        document.addEventListener('click', () => {
            setActiveMenuClass(`${classes.menu} ${classes.click}`)
            setTimeout(() => {
                setActiveMenuClass(`${classes.menu}`)
            }, 500)
        })
    }, [])


    return (
        <div className={activeMenuClass}>
            <Navigation/>
            <Outlet/>
            <div className={classes.extraLightTopLeft}></div>
            <div className={classes.extraLightTopRight}></div>
            <div className={classes.extraLightBottomLeft}></div>
            <div className={classes.extraLightBottomRight}></div>
        </div>
    );
};

export default MainPage;