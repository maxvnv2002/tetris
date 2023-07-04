import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";
import Navigation from "../Navigation";
import classes from "../../pages/MainPage/MainPage.module.scss";

const Layout = () => {
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
        <>
            <Navigation/>
            <Outlet/>
            <div className={classes.extraLightTopLeft}></div>
            <div className={classes.extraLightTopRight}></div>
            <div className={classes.extraLightBottomLeft}></div>
            <div className={classes.extraLightBottomRight}></div>
        </>
    );
};

export default Layout;