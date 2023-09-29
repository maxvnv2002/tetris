import React from 'react';
import SmallButton from "../../UIKit/SmallButton";
import classes from './NavMenu.module.scss'
import {useSelector} from "react-redux";
import {icons} from "../../constants/icons";
import store from "../../store";
import {useLocation} from "react-router-dom";
import * as settingsActions from "../../store/actions/settingsActions";

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
        store.dispatch({type: settingsActions.showPopup, payload: { isSettingsShowed: true }})
    }
    const leaderBoardClickHandler = () => {
        store.dispatch({type: settingsActions.showPopup, payload: { isLeaderBoardShowed: true }})
    }



    return (
        (<menu className={menuClasses}>
            <SmallButton image={icons.people}/>
            <SmallButton image={icons.leaderboards} onClick={leaderBoardClickHandler}/>
            <SmallButton image={settingsImage} onClick={settingsClickHandler}/>
        </menu>)
    );
};

export default NavMenu;