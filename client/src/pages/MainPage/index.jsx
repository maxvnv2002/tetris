import React, {useEffect, useState} from 'react';
import classes from './MainPage.module.scss'
import Navigation from "../../components/Navigation";
import {Outlet, useLocation} from "react-router-dom";
import Alert from "../../components/Alert";
import Popup from "../../components/Popup";
import ProgressGroup from "../../components/ProgressGroup";
import LeaderBoard from "../../components/LeaderBoard";
import {useSelector} from "react-redux";
import store from "../../store";
import * as actions from "../../store/actions/settingsActions";
import ExtraLight from "../../components/ExtraLight";

const MainPage = () => {
    const location = useLocation();
    const [isPulsedClick, setIsPulsedClick] = useState(false)
    const clickHandler = () => {
        setIsPulsedClick(true)
        setTimeout(() => {
            setIsPulsedClick(false)
        } , 500)
    }

    const isSettingsShowed = useSelector(state => state.settings.isSettingsShowed);
    const isGamePage = location.pathname.includes('game')
    const isLeaderBoardShowed = useSelector(state => state.settings.isLeaderBoardShowed);
    const backButtonHandler = () => {
        store.dispatch({ type: actions.hidePopup })
    }

    useEffect(() => {
        document.addEventListener('click', clickHandler);
        return () => {
            document.removeEventListener('click', clickHandler);
        }
    }, [])


    return (
        <div className={classes.menu}>
            <Navigation/>
            <Outlet/>
            <Alert/>
            { isSettingsShowed && !isGamePage && (
                <Popup title={'Settings'} buttonHandler={backButtonHandler}>
                    <ProgressGroup/>
                </Popup>)
            }
            { isLeaderBoardShowed && (
                <Popup title={'Leaderboard'} buttonHandler={backButtonHandler}>
                    <LeaderBoard/>
                </Popup>)
            }
            <ExtraLight isPulse={isPulsedClick}/>
        </div>
    );
};

export default MainPage;