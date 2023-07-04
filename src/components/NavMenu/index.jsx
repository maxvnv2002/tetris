import React, {useState} from 'react';
import SmallButton from "../SmallButton";
import classes from './NavMenu.module.scss'
import {useSelector} from "react-redux";
import {icons} from "../../constants/icons";
import store from "../../store";
import {showSettings} from "../../store/actions/settingsActions";
import {useLocation} from "react-router-dom";

const NavMenu = () => {
    const location = useLocation();
    const isStartAnimating = useSelector(state => state.settings.isGreeting)
    const menuClasses = !isStartAnimating ?
        `${classes.menu}` :
        `${classes.menu} ${classes.menuHidden}`
    const isGamePage = location.pathname.includes('game')
    const settingsImage = isGamePage ?
        icons.pause :
        icons.settings


    const settingsClickHandler = () => {
        store.dispatch({type: showSettings})
    }



    return (
        (<menu className={menuClasses}>
            <SmallButton image={icons.people}/>
            <SmallButton image={icons.leaderboards}/>
            <SmallButton image={settingsImage} onClick={settingsClickHandler}/>
        </menu>)
    );
};

export default NavMenu;